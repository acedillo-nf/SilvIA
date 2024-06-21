import { ZodType, z } from 'zod'

export type UserRegistrationProps = {
  type: string
  fullname: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
  otp: string
}

export const UserRegistrationSchema: ZodType<UserRegistrationProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(4, { message: 'Tu nombre completo debe tener mas de 3 letras' }),
    email: z.string().email({ message: 'Formato de correo incorrecto' }),
    confirmEmail: z.string().email(),
    password: z
      .string()
      .min(8, { message: 'Tu contraseña debe ser mayor a 8 carácteres' })
      .max(64, {
        message: 'Tu contraseña no debe de tener mas de 64 carácteres',
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'contraseña solo debe contener letras y números'
      ),
    confirmPassword: z.string(),
    otp: z.string().min(6, { message: 'Escribe el código de 6 digitos' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'contraseñas no coinciden',
    path: ['confirmPassword'],
  })
  .refine((schema) => schema.email === schema.confirmEmail, {
    message: 'Tus correos no coinciden',
    path: ['confirmEmail'],
  })

export type UserLoginProps = {
  email: string
  password: string
}

export type ChangePasswordProps = {
  password: string
  confirmPassword: string
}

export const UserLoginSchema: ZodType<UserLoginProps> = z.object({
  email: z.string().email({ message: 'Correo invalido' }),
  password: z
    .string()
    .min(8, { message: 'Tu contraseña debe ser mayor a 8 carácteres' })
    .max(64, {
      message: 'Tu contraseña no debe de tener mas de 64 carácteres',
    }),
})

export const ChangePasswordSchema: ZodType<ChangePasswordProps> = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Tu contraseña debe ser mayor a 8 carácteres' })
      .max(64, {
        message: 'Tu contraseña no debe de tener mas de 64 carácteres',
      })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'contraseña solo debe contener letras y números'
      ),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'contraseñas no coinciden',
    path: ['confirmPassword'],
  })