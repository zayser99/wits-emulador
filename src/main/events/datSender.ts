// emisorDatos.js
export function iniciarEmisionDatos(win): void {
  setInterval(() => {
    const dato = Math.random() // puedes reemplazar por datos reales
    win.webContents.send('nuevo-dato', dato)
  }, 1000)
}
