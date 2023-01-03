import {
  createColumnHelper
} from '@tanstack/react-table'

import Table from '@components/table'
import { Partnership } from '@models/partnership'
import { useEffect, useState } from 'react'

type PartnershipTableProps = {
  defaultData: Partnership[]
  handleRowClick: (id: string) => void
}

const PartnershipTable = ({ defaultData, handleRowClick }: PartnershipTableProps ) => {
  const columnHelper = createColumnHelper<Partnership>()
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const newColumns = [
      columnHelper.accessor('description', {
        cell: info => info.getValue(),
        header: () => <span>Description</span>
        // footer: props => props.column.id
      }),
      columnHelper.accessor(({ partnershipDate }) => partnershipDate, {
        id: 'partnershipDate',
        cell: info => {
          const formattedDate = new Date(info.getValue())
          return formattedDate.toLocaleDateString()
        },
        header: () => <span>Partnership Start Date</span>
      // footer: props => props.column.id
      }),
      columnHelper.accessor(({ isActive }) => isActive, {
        id: 'isActive',
        cell: info => {
          info.getValue() ? 'Active' : 'Terminated'
        },
        header: () => <span>Status</span>
      // footer: props => props.column.id
      }),
    ]
    setColumns(newColumns)
  }, [])

  return (
    <Table
      onRowClick={handleRowClick}
      columns={columns}
      defaultData={defaultData}
    />
  )
}

export default PartnershipTable
