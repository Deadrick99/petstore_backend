import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './objects/breedWhereUniqueInput.schema';
import { breedCreateInputObjectSchema } from './objects/breedCreateInput.schema';
import { breedUpdateInputObjectSchema } from './objects/breedUpdateInput.schema';

export const breedUpsertSchema = z.object({
  where: breedWhereUniqueInputObjectSchema,
  create: breedCreateInputObjectSchema,
  update: breedUpdateInputObjectSchema,
});
