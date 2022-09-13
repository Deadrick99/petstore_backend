import { z } from 'zod';
import { SaleAnimalUpdateManyMutationInputObjectSchema } from './objects/SaleAnimalUpdateManyMutationInput.schema';
import { SaleAnimalWhereInputObjectSchema } from './objects/SaleAnimalWhereInput.schema';

export const SaleAnimalUpdateManySchema = z.object({
  data: SaleAnimalUpdateManyMutationInputObjectSchema,
  where: SaleAnimalWhereInputObjectSchema.optional(),
});
