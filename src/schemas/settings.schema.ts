import { z } from 'zod'

export const MAX_UPLOAD_SIZE = 1024 * 1024 * 2 // 2MB
export const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg']

export type DomainSettingsProps = {
  domain?: string
  image?: any
  welcomeMessage?: string
}

export type HelpDeskQuestionsProps = {
  question: string
  answer: string
}

export type AddProductProps = {
  name: string
  image: any
  price: string
}

export type FilterQuestionsProps = {
  question: string
}

export const AddDomainSchema = z.object({
  domain: z
    .string()
    .min(4, { message: 'El dominio debe tener mínimo 3 letras' })
    .refine(
      (value) =>
        /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,3}$/.test(value ?? ''),
      'Este no es un dominio valido'
    ),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
      message: 'Tu archivo debe ser menor a 2MB',
    })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: 'Solamente archivos JPG, JPEG & PNG son permitidos',
    }),
})

export const DomainSettingsSchema = z
  .object({
    domain: z
      .string()
      .min(4, { message: 'El dominio debe tener mínimo 3 letras' })
      .refine(
        (value) =>
          /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,3}$/.test(value ?? ''),
        'Este no es un dominio valido'
      )
      .optional()
      .or(z.literal('').transform(() => undefined)),
    image: z.any().optional(),
    welcomeMessage: z
      .string()
      .min(6, 'Le mensaje debe contener mínimo 6 letras')
      .optional()
      .or(z.literal('').transform(() => undefined)),
  })
  .refine(
    (schema) => {
      if (schema.image?.length) {
        if (
          ACCEPTED_FILE_TYPES.includes(schema.image?.[0].type!) &&
          schema.image?.[0].size <= MAX_UPLOAD_SIZE
        ) {
          return true
        }
      }
      if (!schema.image?.length) {
        return true
      }
    },
    {
      message:
        'El archivo debe ser menor a 2 MB, y solo archivos PNG, JPEG & JPG son aceptados',
      path: ['image'],
    }
  )

export const HelpDeskQuestionsSchema = z.object({
  question: z.string().min(1, { message: 'Pregunta no puede quedarse en blanco' }),
  answer: z.string().min(1, { message: 'Pregunta no puede quedarse en blanco' }),
})

export const FilterQuestionsSchema = z.object({
  question: z.string().min(1, { message: 'Pregunta no puede quedarse en blanco' }),
})

export const AddProductSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'El nombre debe contener mínimo 3 letras' }),
  image: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_UPLOAD_SIZE, {
      message: 'Tu archivo debe ser menor a 2MB',
    })
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: 'Solamente archivos JPG, JPEG & PNG son permitidos',
    }),
  price: z.string(),
})