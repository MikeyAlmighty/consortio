


type ChipProps = {
    label: string
}

const Chip = ({ label }: ChipProps) => {
    return(
        <div className='border rounded-full bg-gray-400 px-6'>
            <p className='text-white'>{label}</p>
        </div>
    )
}

export default Chip
