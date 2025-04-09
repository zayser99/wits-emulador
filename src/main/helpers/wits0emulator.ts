import net from 'net'
let win

export const serverWistCero = (windows): void => {
  win = windows
  dataEmiter.listen(3000, () => {
    console.log('Servidor WITS0 activo en puerto 3000')
  })
}

const dataEmiter = net.createServer((socket) => {
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
    if (win) win.webContents.send('nuevo-dato', conunter)
    conunter++
  }, 1000)

  socket.on('end', () => {
    clearInterval(interval)
    console.log('Cliente desconectado')
  })

  socket.on('error', (err) => {
    clearInterval(interval)
    console.error('Error en el socket:', err)
  })
})
