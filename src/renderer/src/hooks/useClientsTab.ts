import { useState, useCallback } from 'react'
import { useIpcListener } from './useIpcListener'
import { clientFront, useClientsTabProps } from 'src/types/front.types'

export const useClientsTab = (): useClientsTabProps => {
  const [clients, setClients] = useState<clientFront[]>([])
  // Escucha de eventos
  useIpcListener<clientFront[]>('clientList', setClients)

  // Handlers para envío y llamada
  const deleteClientHandle = useCallback((clientId: string): void => {
    window.electron.ipcRenderer.send('dropClient', clientId)
  }, [])

  return {
    clients,
    deleteClientHandle
  }
}
