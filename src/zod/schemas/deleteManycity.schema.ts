import { z } from 'zod';
import { cityWhereInputObjectSchema } from './objects/cityWhereInput.schema';

export const cityDeleteManySchema = z.object({
  where: cityWhereInputObjectSchema.optional(),
});
