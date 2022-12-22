import {
  createColumnHelper
} from '@tanstack/react-table'

import Table from '@components/table'
import { Brand } from '@models/brand'

type BrandTableProps = {
  defaultData: Brand[]
  handleRowClick: (id: string) => void
}

const BrandTable = ({ defaultData, handleRowClick }: BrandTableProps) => {
  const columnHelper = createColumnHelper<Brand>()

  const columns = [
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: () => <span>Company</span>,
      footer: props => props.column.id
    }),
    columnHelper.accessor(({ origin }) => origin, {
      id: 'origin',
      cell: info => info.getValue(),
      header: () => <span>Origin</span>,
      footer: props => props.column.id
    }),
    columnHelper.accessor(({ inceptionDate }) => inceptionDate, {
      id: 'inceptionDate',
      cell: info => info.getValue(),
      header: () => <span>Company Started</span>,
      footer: props => props.column.id
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

export default BrandTable
