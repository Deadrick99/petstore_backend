import { z } from 'zod';
import { BreedUpdateInputObjectSchema } from './objects/BreedUpdateInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './objects/BreedWhereUniqueInput.schema';

export const BreedUpdateOneSchema = z.object({
  data: BreedUpdateInputObjectSchema,
  where: BreedWhereUniqueInputObjectSchema,
});
