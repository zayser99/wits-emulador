import { tab } from 'src/types/front.types'
import Tabs from './Tabs'
import ServerTab from './ServerTab'

function HomePage(): JSX.Element {
  const tabs: tab[] = [
    { id: 'data', label: 'Data', content: <p>Server element</p> },
    { id: 'server', label: 'Server', content: <ServerTab /> },
    { id: 'clients', label: 'Clients', content: <p>Clients element</p> }
  ]

  return <Tabs tabs={tabs} />
}

export default HomePage
