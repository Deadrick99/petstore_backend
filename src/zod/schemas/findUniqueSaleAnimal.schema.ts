import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './objects/SaleAnimalWhereUniqueInput.schema';

export const SaleAnimalFindUniqueSchema = z.object({
  where: SaleAnimalWhereUniqueInputObjectSchema,
});
