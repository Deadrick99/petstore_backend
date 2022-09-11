import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './objects/animalorderWhereUniqueInput.schema';

export const animalorderDeleteOneSchema = z.object({
  where: animalorderWhereUniqueInputObjectSchema,
});
