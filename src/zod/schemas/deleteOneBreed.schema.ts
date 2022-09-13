import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './objects/BreedWhereUniqueInput.schema';

export const BreedDeleteOneSchema = z.object({
  where: BreedWhereUniqueInputObjectSchema,
});
