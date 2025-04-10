import { useServerTabProps } from 'src/types/front.types'
import Versions from '../components/Versions'

function ServerTab({
  valor,
  serverStatus,
  ipcHandle,
  pupauHandle,
  serverHandle
}: useServerTabProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <button
          type="button"
          onClick={serverHandle}
          className={`focus:outline-none text-white ${serverStatus ? 'bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300' : 'bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300'}  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
        >
          {serverStatus ? 'OFF' : 'ON'}
        </button>
        <h3>Server Status: {serverStatus ? 'ON 🟢' : 'OFF 🔴'}</h3>
      </div>

      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100" />

      <form className="w-full space-y-4 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <label htmlFor="port" className="text-left font-medium sm:w-1/3">
            Puerto
          </label>
          <input
            id="port"
            type="number"
            className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Ingrese el puerto"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <label htmlFor="frequency" className="text-left font-medium sm:w-1/3">
            Frecuencia de datos
          </label>
          <input
            id="frequency"
            type="number"
            className="w-full sm:w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Ingrese la frecuencia"
          />
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Guardar
          </button>
        </div>
      </form>

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

export default ServerTab
