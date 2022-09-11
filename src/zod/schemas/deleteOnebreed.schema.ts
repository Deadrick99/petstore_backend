import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './objects/breedWhereUniqueInput.schema';

export const breedDeleteOneSchema = z.object({
  where: breedWhereUniqueInputObjectSchema,
});
