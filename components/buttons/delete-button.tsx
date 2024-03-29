type DeleteButtonProps = {
  handleDelete: () => void
  label?: string
}

const DeleteButton = ({ handleDelete, label = 'Delete' }: DeleteButtonProps) => (
  <input
    className='border text-gray-300 border-gray-300 rounded bg-red-500 m-4 p-4 cursor-pointer hover:bg-red-300 w-48'
    type='button'
    value={label}
    onClick={handleDelete}
  />
)

export default DeleteButton
