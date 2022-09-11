import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './objects/animalorderWhereUniqueInput.schema';

export const animalorderFindUniqueSchema = z.object({
  where: animalorderWhereUniqueInputObjectSchema,
});
