import { BrowserWindow } from 'electron'
import net, { Socket } from 'net'
interface client {
  socket: Socket
  interval: ReturnType<typeof setInterval>
}

class WistServeClass {
  clients: Set<client>
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
    this.clients = new Set<client>()
  }

  startServer(): void {
    this.server = net.createServer((socket) => {
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
        console.log(`mensaje #${conunter} Enviado`)
        if (this.browserWindow) this.browserWindow.webContents.send('nuevo-dato', conunter)
        conunter++
      }, this.frecuency)

      const cliente: client = { socket: socket, interval: interval }
      this.clients.add(cliente)

      socket.on('end', () => {
        clearInterval(interval)
        console.log('Cliente desconectado')
      })

      socket.on('error', (err) => {
        clearInterval(interval)
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
}

export const wistServer = new WistServeClass({
  port: 3000,
  frecuency: 1000,
  browserWindow: null
})
