import { z } from 'zod';
import { SaleAnimalWhereInputObjectSchema } from './objects/SaleAnimalWhereInput.schema';

export const SaleAnimalDeleteManySchema = z.object({
  where: SaleAnimalWhereInputObjectSchema.optional(),
});
