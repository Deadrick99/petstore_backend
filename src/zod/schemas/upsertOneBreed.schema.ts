import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './objects/BreedWhereUniqueInput.schema';
import { BreedCreateInputObjectSchema } from './objects/BreedCreateInput.schema';
import { BreedUpdateInputObjectSchema } from './objects/BreedUpdateInput.schema';

export const BreedUpsertSchema = z.object({
  where: BreedWhereUniqueInputObjectSchema,
  create: BreedCreateInputObjectSchema,
  update: BreedUpdateInputObjectSchema,
});
