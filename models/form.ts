import {
  UseFormHandleSubmit,
  UseFormRegister,
  Control,
  FieldErrors,
  FieldValues
} from 'react-hook-form'

export type FormProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  handleDelete: (id: string) => void
  handleBack: () => void
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  control: Control<FieldValues>
  isLoading: boolean
  isEdit: boolean
}
