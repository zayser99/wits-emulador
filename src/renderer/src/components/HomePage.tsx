import { tab } from 'src/types/front.types'
import Tabs from './Tabs'
import ServerTab from '../pages/ServerTab'
import DataTab from '@renderer/pages/DataTab'
import ClientsTab from '@renderer/pages/ClientsTab'
import { useServerTab } from '@renderer/hooks/useServerTab'

function HomePage(): JSX.Element {
  const { valor, serverStatus, ipcHandle, pupauHandle, serverHandle } = useServerTab()

  const tabs: tab[] = [
    { id: 'data', label: 'Data', content: <DataTab /> },
    {
      id: 'server',
      label: 'Server',
      content: (
        <ServerTab
          valor={valor}
          serverStatus={serverStatus}
          ipcHandle={ipcHandle}
          pupauHandle={pupauHandle}
          serverHandle={serverHandle}
        />
      )
    },
    { id: 'clients', label: 'Clients', content: <ClientsTab /> }
  ]

  return <Tabs tabs={tabs} />
}

export default HomePage
