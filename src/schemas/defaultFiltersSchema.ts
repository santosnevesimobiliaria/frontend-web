import * as z from 'zod';

enum Type {
  house = 'house',
  apartament = 'apartament',
}

export const defaultFiltersSchema = z.object({
  type: z.nativeEnum(Type).optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  financing: z.boolean().optional(),
  minPrice: z
    .string()
    .transform((value) => {
      // Formatar o número com vírgulas
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    })
    .optional(),
  maxPrice: z
    .string()
    .transform((value) => {
      // Formatar o número com vírgulas
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    })
    .optional(),
});

export type TypeFormData = z.infer<typeof defaultFiltersSchema>;
