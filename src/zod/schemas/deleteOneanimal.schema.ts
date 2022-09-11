import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './objects/animalWhereUniqueInput.schema';

export const animalDeleteOneSchema = z.object({
  where: animalWhereUniqueInputObjectSchema,
});
