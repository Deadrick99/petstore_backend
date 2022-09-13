import { z } from 'zod';
import { AnimalUpdateInputObjectSchema } from './objects/AnimalUpdateInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalUpdateOneSchema = z.object({
  data: AnimalUpdateInputObjectSchema,
  where: AnimalWhereUniqueInputObjectSchema,
});
