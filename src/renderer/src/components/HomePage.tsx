import Versions from './Versions'
import electronLogo from '../assets/electron.svg'
import { useEffect, useState } from 'react'

function HomePage(): JSX.Element {
  const [valor, setValor] = useState<number | null>(null)

  useEffect(() => {
    const listener = (_event: Electron.IpcRendererEvent, data: number): void => {
      setValor(data)
    }

    window.electron.ipcRenderer.on('nuevo-dato', listener)

    // Cleanup al desmontar
    return (): void => {
      window.electron.ipcRenderer.removeListener('nuevo-dato', listener)
    }
  }, [])

  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const pupauHandle = async (): Promise<void> => {
    const xd = await window.electron.ipcRenderer.invoke('pupa')
    alert(xd)
  }

  return (
    <>
      <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-300">
        Pink
      </span>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
        &nbsp;and <span className="ts">{valor ?? 'Esperando...'}</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send ping
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={pupauHandle}>
            Send Papu
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default HomePage
