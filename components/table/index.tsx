/* import { useState } from 'react' */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef
} from '@tanstack/react-table'

type TableProps <T> = {
  columns: Array<ColumnDef<T, String>>
  onRowClick: (id: string) => void
  defaultData: T[]
}

const Table = <T,>({ columns, defaultData = [], onRowClick }: TableProps<T>) => {
  /* const [data, setData] = useState(() => [...defaultData]) */

  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div>
      <table className='w-full bg-gray-100'>
        <thead className='text-gray-500 font-bold'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr onClick={() => onRowClick(row.original._id)} className='text-center text-gray-500 hover:bg-lime-300 cursor-pointer' key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot> */}
        {/*   {table.getFooterGroups().map(footerGroup => ( */}
        {/*     <tr key={footerGroup.id}> */}
        {/*       {footerGroup.headers.map(header => ( */}
        {/*         <th key={header.id}> */}
        {/*           {header.isPlaceholder */}
        {/*             ? null */}
        {/*             : flexRender( */}
        {/*               header.column.columnDef.footer, */}
        {/*               header.getContext() */}
        {/*             )} */}
        {/*         </th> */}
        {/*       ))} */}
        {/*     </tr> */}
        {/*   ))} */}
        {/* </tfoot> */}
      </table>
      <div />
      {/* <button onClick={() => rerender()} > */}
      {/*   Rerender */}
      {/* </button> */}
    </div>
  )
}

export default Table
