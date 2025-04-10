import { BrowserWindow } from 'electron'
import net from 'net'
import { clientBackend, clientFront } from '../../types/front.types'

class WistServeClass {
  clients: Set<clientBackend>
  browserWindow: BrowserWindow | null
  conectionIsActive: boolean
  port: number
  frecuency: number
  server: net.Server | null

  constructor({ port, frecuency, browserWindow }) {
    // Un mapa para almacenar conexiones dinámicas por ID de pozo o cualquier identificador único
    this.browserWindow = browserWindow
    this.conectionIsActive = false
    this.port = port
    this.frecuency = frecuency
    this.server = null
    this.clients = new Set<clientBackend>()
  }

  startServer(): void {
    this.server = net.createServer((socket) => {
      const id = crypto.randomUUID()
      let conunter: number = 0
      console.log('Cliente conectado:', socket.remoteAddress, socket.remotePort)

      const interval = setInterval(() => {
        const witsFrame = `
        &&
        0105250408
        0106180246
        1984Zayser Inc
        012090
        0123121
        012474
        01211313.17
        01120.71
        0108567.57
        0110567.57
        011449.75
        011549.75
        01165.29
        01175.29
        011330.47
        011844.94
        011944.94
        01410.000000
        01420.000000
        01430.000000
        01440.000000
        01450.000000
        !!
        `
        socket.write(witsFrame) // Enviar como string normal
        // console.log(`mensaje #${conunter} Enviado`)
        if (this.browserWindow) this.browserWindow.webContents.send('nuevo-dato', conunter)
        conunter++
      }, this.frecuency)

      const cliente: clientBackend = {
        id: id,
        socket: socket,
        interval: interval,
        ip: socket.remoteAddress ? socket.remoteAddress : '-',
        remotePort: socket.remotePort ? socket.remotePort : '-',
        ipType: socket.remoteFamily ? socket.remoteFamily : '-'
      }
      this.clients.add(cliente)
      this.#refreshClientsToFrontEnd()

      socket.on('end', () => {
        clearInterval(interval)
        this.dropClient(id)
        console.log('Cliente desconectado')
      })

      socket.on('error', (err) => {
        clearInterval(interval)
        this.#refreshClientsToFrontEnd()
        console.error('Error en el socket:', err)
      })
    })
    this.server.listen(this.port, () => {
      console.log(`Servidor WITS0 activo en puerto ${this.port}`)
      if (this.browserWindow) this.browserWindow.webContents.send('serverStatus', true)
    })
  }
  turnOffServer(): void {
    for (const client of this.clients) {
      client.socket.end()
      client.socket.destroy()
      clearInterval(client.interval)
    }

    this.server?.close(() => {
      console.log('Servidor detenido')
    })

    if (this.browserWindow) this.browserWindow.webContents.send('serverStatus', false)
    this.server = null
  }

  dropClient(idToDelete: string): void {
    for (const client of this.clients) {
      if (client.id === idToDelete) {
        client.socket.end()
        client.socket.destroy()
        clearInterval(client.interval)
        this.clients.delete(client) // elimina por referencia
        this.#refreshClientsToFrontEnd()
      }
    }
  }

  #refreshClientsToFrontEnd(): void {
    const clientsLite: clientFront[] = []
    for (const client of this.clients) {
      const clientLite = {
        id: client.id,
        ip: client.ip,
        remotePort: client.remotePort,
        ipType: client.ipType
      }
      clientsLite.push(clientLite)
    }
    if (this.browserWindow) this.browserWindow.webContents.send('clientList', clientsLite)
  }
}

export const wistServer = new WistServeClass({
  port: 3000,
  frecuency: 1000,
  browserWindow: null
})
