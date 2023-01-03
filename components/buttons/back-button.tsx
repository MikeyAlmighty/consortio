type BackButtonProps = {
  handleBack: () => void
}

const BackButton = ({ handleBack }: BackButtonProps) => (
  <input
    className='border text-gray-100 p-3 border-gray-500 rounded bg-gray-500 m-4 cursor-pointer hover:bg-gray-300 w-48'
    type='button'
    value='Back'
    onClick={handleBack}
  />
)

export default BackButton
