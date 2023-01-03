import {
  createColumnHelper
} from '@tanstack/react-table'

import Table from '@components/table'
import { Brand } from '@models/brand'
import { useEffect, useState } from 'react'

type BrandTableProps = {
  defaultData: Brand[]
  handleRowClick: (id: string) => void
}

const BrandTable = ({ defaultData, handleRowClick }: BrandTableProps) => {
  const columnHelper = createColumnHelper<Brand>()
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const newColumns = [
      columnHelper.accessor('name', {
        cell: info => info.getValue(),
        header: () => <span>Company</span>
        // footer: props => props.column.id
      }),
      columnHelper.accessor(({ origin }) => origin, {
        id: 'origin',
        cell: info => info.getValue(),
        header: () => <span>Origin</span>
      // footer: props => props.column.id
      }),
      columnHelper.accessor(({ incorporationDate }) => incorporationDate, {
        id: 'incorporationDate',

        cell: info => {
          const formattedDate = new Date(info.getValue())
          return formattedDate.toLocaleDateString()
        },
        header: () => <span>Date of Incorporation</span>
      // footer: props => props.column.id
      })
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

export default BrandTable
