import { AddModal, Button, ConnectionCard } from 'components'
import { CreateConnectionInput, IConnection } from 'types/Connection'

import { useState } from 'react'

interface IProps {
  unifiedApi: string
  connections: IConnection[]
  updateConnection: (
    values: CreateConnectionInput,
    successCallback: () => void,
    errorCallback: () => void
  ) => void
}

const ConnectionsList = ({ unifiedApi, connections = [], updateConnection }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const addedConnections = connections.filter((connection) => connection.added)
  const availableConnections = connections.filter((connection) => !connection.added)
  const noConnectionsAdded = addedConnections.length === 0

  return (
    <section className="mt-12" data-testid={'connections-list'}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-medium uppercase">{unifiedApi} integrations</h2>
        <Button
          text="+ Add"
          handleClick={() => setModalOpen(true)}
          cssClass={'spec-add-integration'}
        />
      </div>
      {addedConnections.map((connection) => {
        const { id } = connection

        return <ConnectionCard key={id} connection={connection} />
      })}
      {noConnectionsAdded && (
        <div className="mt-5 text-sm italic text-gray-500">
          No {unifiedApi} integrations added yet.
        </div>
      )}
      <AddModal
        open={modalOpen}
        setOpen={setModalOpen}
        unifiedApi={unifiedApi}
        availableConnections={availableConnections}
        updateConnection={updateConnection}
      />
    </section>
  )
}

export default ConnectionsList
