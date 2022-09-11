import { z } from 'zod';
import { animalUpdateInputObjectSchema } from './objects/animalUpdateInput.schema';
import { animalWhereUniqueInputObjectSchema } from './objects/animalWhereUniqueInput.schema';

export const animalUpdateOneSchema = z.object({
  data: animalUpdateInputObjectSchema,
  where: animalWhereUniqueInputObjectSchema,
});
