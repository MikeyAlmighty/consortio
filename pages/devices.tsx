import DeviceCard from "@components/cards/device-card"

const Devices = () => {
  return (
    <div className='flex'>
        <DeviceCard
            label='Desktop'
            deviceIconSrc='/assets/desktop-icon.svg'
            alt='desktop-icon'
        />
        <DeviceCard
            label='Tablet'
            deviceIconSrc='/assets/tablet-icon.svg'
            alt='tablet-icon'
        />
        <DeviceCard
            label='Mobile'
            deviceIconSrc='/assets/mobile-icon.svg'
            alt='mobile-icon'
        />
        <p className='text-3xl'>Device Analysis</p>
        <p className='text-xl'>Cross-Device Overall</p>
        <p className='text-lg font-bold'>Performance by Influencer</p>
        <p className='text-lg font-bold'>Performance by Platform</p>
    </div>
  )
}

export default Devices
