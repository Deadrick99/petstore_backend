import { z } from 'zod';
import { breedUpdateInputObjectSchema } from './objects/breedUpdateInput.schema';
import { breedWhereUniqueInputObjectSchema } from './objects/breedWhereUniqueInput.schema';

export const breedUpdateOneSchema = z.object({
  data: breedUpdateInputObjectSchema,
  where: breedWhereUniqueInputObjectSchema,
});
