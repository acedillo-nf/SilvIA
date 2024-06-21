import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'salesman'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'salesman'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2 className="text-nmarino md:text-4xl font-bold">Crea una cuenta</h2>
      <p className="text-nblue md:text-sm">
        Hablanos de ti, dejanos crear una experiencia personalizada
        <br /> para ti
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="Soy dueño de un negocio"
        text="Quiero utilizarlo para mi empresa"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="salesman"
        title="Soy un vendedor"
        text="Quiero implementarlo en ventas"
      />
    </>
  )
}

export default TypeSelectionForm