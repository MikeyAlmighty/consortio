import { toast } from 'react-toastify';

type ToastProps = {
  message: string
  isError?: boolean
}

export const toasty = ({ message, isError = false }: ToastProps) => (
  toast(`${!isError ? "Alright, alright alright!" : "Eish!"} ${message}`, {
    theme: 'dark',
    hideProgressBar: true,
    autoClose: 1500,
    closeButton: false,
    style: {
      color: "#84CC16",
      backgroundColor: '#f3f4f6'
    }
  })
)
