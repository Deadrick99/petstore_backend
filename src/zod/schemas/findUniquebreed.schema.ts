import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './objects/breedWhereUniqueInput.schema';

export const breedFindUniqueSchema = z.object({
  where: breedWhereUniqueInputObjectSchema,
});
