import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalDeleteOneSchema = z.object({
  where: AnimalWhereUniqueInputObjectSchema,
});
