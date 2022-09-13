import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './objects/AnimalOrderWhereUniqueInput.schema';

export const AnimalOrderFindUniqueSchema = z.object({
  where: AnimalOrderWhereUniqueInputObjectSchema,
});
