import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './objects/AnimalOrderWhereUniqueInput.schema';

export const AnimalOrderDeleteOneSchema = z.object({
  where: AnimalOrderWhereUniqueInputObjectSchema,
});
