type DeleteButtonProps = {
    handleDelete: () => void
}

const DeleteButton = ({ handleDelete }: DeleteButtonProps ) => (
  <input
    className='border text-gray-700 border-lime-500 rounded bg-gray-100 m-4 cursor-pointer hover:bg-gray-500 w-48'
    type='button'
    value='Delete'
    onClick={handleDelete}
  />
)

export default DeleteButton
