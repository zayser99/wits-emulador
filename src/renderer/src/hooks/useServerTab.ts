import { useState, useCallback } from 'react'
import { useIpcListener } from './useIpcListener'
import { useServerTabProps } from 'src/types/front.types'

export const useServerTab = (): useServerTabProps => {
  const [valor, setValor] = useState<number | null>(null)
  const [serverStatus, setServerStatus] = useState<boolean>(false)

  // Escucha de eventos
  useIpcListener<number>('nuevo-dato', setValor)
  useIpcListener<boolean>('serverStatus', setServerStatus)

  // Handlers para envío y llamada
  const ipcHandle = useCallback((): void => {
    window.electron.ipcRenderer.send('ping')
  }, [])

  const pupauHandle = useCallback(async (): Promise<void> => {
    const result = await window.electron.ipcRenderer.invoke('pupa')
    alert(result)
  }, [])

  const serverHandle = useCallback((): void => {
    window.electron.ipcRenderer.send(serverStatus ? 'serverOff' : 'serverOn')
  }, [serverStatus])

  return {
    valor,
    serverStatus,
    ipcHandle,
    pupauHandle,
    serverHandle
  }
}
