import {
  createColumnHelper
} from '@tanstack/react-table'

import Table from '@components/table'
import { Influencer } from '@models/influencer'

type InfluencerTableProps = {
  defaultData: Influencer[]
  handleRowClick: (id: string) => void
}

const InfluencerTable = ({ defaultData, handleRowClick }: InfluencerTableProps) => {
  const columnHelper = createColumnHelper<Influencer>()

  const columns = [
    columnHelper.accessor('firstName', {
      cell: info => info.getValue(),
      header: () => <span>First Name</span>
      // footer: props => props.column.id
    }),
    columnHelper.accessor(({ lastName }) => lastName, {
      id: 'lastName',
      cell: info => info.getValue(),
      header: () => <span>Last Name</span>
      // footer: props => props.column.id
    }),
    columnHelper.accessor(({ socialDetails: { email } }) => email, {
      id: 'email',
      cell: info => info.getValue(),
      header: () => <span>Email</span>
      // footer: props => props.column.id
    }),
    columnHelper.accessor(({ socialDetails: { handle } }) => handle, {
      id: 'handle',
      cell: info => info.getValue(),
      header: () => <span>Handle</span>
      // footer: props => props.column.id
    })

  ]
  return (
    <Table
      onRowClick={handleRowClick}
      columns={columns}
      defaultData={defaultData}
    />
  )
}

export default InfluencerTable
