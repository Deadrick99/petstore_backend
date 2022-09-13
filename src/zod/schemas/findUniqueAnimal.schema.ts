import { z } from 'zod';
import { AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';

export const AnimalFindUniqueSchema = z.object({
  where: AnimalWhereUniqueInputObjectSchema,
});
