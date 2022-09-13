import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './objects/SaleAnimalWhereUniqueInput.schema';

export const SaleAnimalDeleteOneSchema = z.object({
  where: SaleAnimalWhereUniqueInputObjectSchema,
});
