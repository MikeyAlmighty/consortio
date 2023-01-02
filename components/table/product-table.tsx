import {
  createColumnHelper
} from '@tanstack/react-table'

import Table from '@components/table'
import { Product } from '@models/product'

type ProductTableProps = {
  defaultData: Product[]
  handleRowClick: (id: string) => void
}

const ProductTable = ({ defaultData, handleRowClick }: ProductTableProps) => {
  const columnHelper = createColumnHelper<Product>()

  const columns = [
    columnHelper.accessor('name', {
      cell: info => info.getValue(),
      header: () => <span>Product Name</span>
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

export default ProductTable
