import { useClientsTabProps } from 'src/types/front.types'

function ClientsTab({ clients, deleteClientHandle }: useClientsTabProps): JSX.Element {
  return (
    <div className="relative overflow-x-auto rounded-2xl shadow-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-2xl">
        <thead className="text-xs text-white  bg-indigo-950 rounded-2xl">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Ip
            </th>
            <th scope="col" className="px-6 py-3">
              Remote Port
            </th>
            <th scope="col" className="px-6 py-3">
              Ip Type
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => {
            return (
              <tr key={client.id} className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {client.id}
                </th>
                <td className="px-6 py-4">{client.ip}</td>
                <td className="px-6 py-4">{client.remotePort}</td>
                <td className="px-6 py-4">{client.ipType}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      deleteClientHandle(client.id)
                    }}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {clients.length < 0 ? (
        <h1 className="flex justify-center">There are no clients connected</h1>
      ) : null}
    </div>
  )
}

export default ClientsTab
