import { useEffect } from 'react'

export const useIpcListener = <T>(channel: string, callback: (data: T) => void): void => {
  useEffect(() => {
    const listener = (_event: Electron.IpcRendererEvent, data: T): void => {
      callback(data)
    }

    window.electron.ipcRenderer.on(channel, listener)

    return (): void => {
      window.electron.ipcRenderer.removeListener(channel, listener)
    }
  }, [channel, callback])
}
