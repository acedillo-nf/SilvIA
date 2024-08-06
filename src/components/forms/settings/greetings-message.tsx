import Section from '@/components/section-label'
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import FormGenerator from '../form-generator'

type GreetingMessageProps = {
  message: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

const WelcomeMessage = ({
  message,
  register,
  errors,
}: GreetingMessageProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Section
        label="Mensajes de bienvenida"
        message="Personaliza el saludo"
      />
      <div className="lg:w-[500px]">
        <FormGenerator
          placeholder={message}
          inputType="textarea"
          lines={2}
          register={register}
          errors={errors}
          name="welcomeMessage"
          type="text"
        />
      </div>
    </div>
  )
}

export default WelcomeMessage