import { z } from 'zod';
import { SaleAnimalUpdateInputObjectSchema } from './objects/SaleAnimalUpdateInput.schema';
import { SaleAnimalWhereUniqueInputObjectSchema } from './objects/SaleAnimalWhereUniqueInput.schema';

export const SaleAnimalUpdateOneSchema = z.object({
  data: SaleAnimalUpdateInputObjectSchema,
  where: SaleAnimalWhereUniqueInputObjectSchema,
});
