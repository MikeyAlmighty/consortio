import Image from 'next/image'

const AddButton = () => (
  <Image
    className='cursor-pointer hover:bg-gray-300 hover:rounded-full'
    alt='plus-add-icon'
    width={40}
    height={40}
    src='/assets/add-icon.svg'
  />
)

export default AddButton
