import { PropertySubtype, PropertyType } from '@/types/enums/propertyEnum';
import * as z from 'zod';

export const defaultProperySchema = z.object({
  title: z.string().nonempty({ message: 'O título é obrigatório' }),
  price: z.string().nonempty({ message: 'O preço é obrigatório' }),
  condon_price: z.string().optional(),
  iptu: z.string().optional(),
  images: z
    .array(z.string())
    .nonempty({ message: 'As imagens são obrigatórias' }),
  ad_image_cover: z
    .number()
    .refine((val) => val >= 0, { message: 'A imagem de capa é obrigatória' }),
  description: z.string().nonempty({ message: 'A descrição é obrigatória' }),
  property_type: z.nativeEnum(PropertyType, {
    errorMap: () => ({ message: 'O tipo de propriedade é obrigatório' }),
  }),
  property_subtype: z.nativeEnum(PropertySubtype, {
    errorMap: () => ({ message: 'O subtipo de propriedade é obrigatório' }),
  }),
  financeable: z
    .boolean()
    .refine((val) => val !== undefined, {
      message: 'A informação de financiável é obrigatória',
    }),
  bedroom: z
    .number()
    .refine((val) => val > 0, { message: 'O número de quartos é obrigatório' }),
  bathroom: z
    .number()
    .refine((val) => val > 0, {
      message: 'O número de banheiros é obrigatório',
    }),
  total_area: z
    .number()
    .refine((val) => val > 0, { message: 'A área total é obrigatória' }),
  useful_area: z
    .number()
    .refine((val) => val > 0, { message: 'A área útil é obrigatória' }),
  parking_spaces: z
    .number()
    .refine((val) => val >= 0, {
      message: 'O número de vagas de estacionamento é obrigatório',
    }),
  videotour_url: z.string().optional(),
  realtorId: z
    .number()
    .refine((val) => val > 0, { message: 'O ID do corretor é obrigatório' }),
  property_features: z.object({
    serviceArea: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de área de serviço é obrigatória',
      }),
    bedroomClosets: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de armários nos quartos é obrigatória',
      }),
    kitchenCabinets: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de armários na cozinha é obrigatória',
      }),
    furnished: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de mobiliado é obrigatória',
      }),
    airConditioning: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de ar condicionado é obrigatória',
      }),
    barbecueGrill: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de churrasqueira é obrigatória',
      }),
    balcony: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de varanda é obrigatória',
      }),
    gym: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de academia é obrigatória',
      }),
    swimmingPool: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de piscina é obrigatória',
      }),
    serviceRoom: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de quarto de serviço é obrigatória',
      }),
  }),
  condo_features: z.object({
    gatedCommunity: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de condomínio fechado é obrigatória',
      }),
    elevator: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de elevador é obrigatória',
      }),
    security24h: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de segurança 24h é obrigatória',
      }),
    concierge: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de portaria é obrigatória',
      }),
    petsAllowed: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de animais permitidos é obrigatória',
      }),
    gym: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de academia é obrigatória',
      }),
    swimmingPool: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de piscina é obrigatória',
      }),
    partyHall: z
      .boolean()
      .refine((val) => val !== undefined, {
        message: 'A informação de salão de festas é obrigatória',
      }),
  }),
});

export type TypeFormData = z.infer<typeof defaultProperySchema>;