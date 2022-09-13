import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './objects/BreedWhereUniqueInput.schema';

export const BreedFindUniqueSchema = z.object({
  where: BreedWhereUniqueInputObjectSchema,
});
