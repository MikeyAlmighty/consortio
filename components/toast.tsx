import { ToastContainer, toast } from 'react-toastify'

type ToastProps = {
  message: string
}

export const toasty = (message: ToastProps) => toast(`Alright, alright alright! ${message}`, {
  theme: 'dark',
  hideProgressBar: true,
  autoClose: 1000
})

const Toasty = () => {
  return (
    <>
      <ToastContainer />
    </>
  )
}
