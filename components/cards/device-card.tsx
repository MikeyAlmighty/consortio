import Chip from '@components/chip'
import Image from 'next/image'

type DeviceCardProps = {
    label: string
    alt: string
    deviceIconSrc: string
}


type ModifierProps = {
    positive: boolean
}

const Modifier = ({ positive  }: ModifierProps) => {
    return (
        <div className='ml-4'>
            {positive ? (
                <div className='text-lime-500'>
                    <p>^</p>
                    <p>2%</p>
                </div>
            ) : (
                <div className='text-red-500'>
                    <p>⌄</p>
                    <p>2%</p>
                </div>
            )}
        </div>
    )
}

const DeviceCard = ({ label, alt, deviceIconSrc }: DeviceCardProps) => {
    return (
        <div className='border rounded p-4 m-5 hover:bg-red-900 hover:cursor-pointer'>
            <div className='flex items-center justify-between'>
                <Chip label={label} />
                <Image alt={alt} width={25} height={15} src={deviceIconSrc} />
            </div>
            <p className='text-gray-500'>SOLO</p>
            <div className='flex'>
                <p className='text-6xl text-gray-500'>6%</p>
                <Modifier positive={false} />
            </div>
        </div>
    )
}

export default DeviceCard
