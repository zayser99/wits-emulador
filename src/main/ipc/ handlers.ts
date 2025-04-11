import { ipcMain } from 'electron'
// import { wistServer } from '../helpers/wits0emulator'

export function registerIpcHandlers(): void {
  ipcMain.handle('pupa', async () => {
    return 'pupa'
  })
}
