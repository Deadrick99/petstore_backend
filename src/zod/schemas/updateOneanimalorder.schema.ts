import { z } from 'zod';
import { animalorderUpdateInputObjectSchema } from './objects/animalorderUpdateInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './objects/animalorderWhereUniqueInput.schema';

export const animalorderUpdateOneSchema = z.object({
  data: animalorderUpdateInputObjectSchema,
  where: animalorderWhereUniqueInputObjectSchema,
});
