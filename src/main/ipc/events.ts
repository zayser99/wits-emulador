import { ipcMain } from 'electron'
import { wistServer } from '../helpers/wits0emulator'

export function registerIpcEvents(): void {
  ipcMain.on('ping', () => {
    console.log('pong')
  })

  ipcMain.on('serverOn', () => {
    wistServer.startServer()
  })

  ipcMain.on('serverOff', () => {
    wistServer.turnOffServer()
  })

  ipcMain.on('dropClient', (_event, idToDelete: string) => {
    wistServer.dropClient(idToDelete)
  })
}
