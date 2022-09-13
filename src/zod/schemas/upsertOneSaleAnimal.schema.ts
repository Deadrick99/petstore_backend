import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './objects/SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalCreateInputObjectSchema } from './objects/SaleAnimalCreateInput.schema';
import { SaleAnimalUpdateInputObjectSchema } from './objects/SaleAnimalUpdateInput.schema';

export const SaleAnimalUpsertSchema = z.object({
  where: SaleAnimalWhereUniqueInputObjectSchema,
  create: SaleAnimalCreateInputObjectSchema,
  update: SaleAnimalUpdateInputObjectSchema,
});
