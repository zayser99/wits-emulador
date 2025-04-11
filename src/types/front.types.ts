import { JSX } from 'react'
import { Socket } from 'net'

export interface tab {
  id: string
  label: string
  content: JSX.Element
}

//hooks types
export interface useServerTabProps {
  valor: number | null
  serverStatus: boolean
  ipcHandle: () => void
  pupauHandle: () => Promise<void>
  serverHandle: () => void
}

export interface useClientsTabProps {
  clients: clientFront[]
  deleteClientHandle: (clientId: string) => void
}

export interface clientBackend {
  id: string
  socket: Socket
  interval: ReturnType<typeof setInterval>
  ip: string
  remotePort: number | string
  ipType: string
}

export type clientFront = Omit<clientBackend, 'socket' | 'interval'>
