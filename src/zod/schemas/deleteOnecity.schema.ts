import { z } from 'zod';
import { cityWhereUniqueInputObjectSchema } from './objects/cityWhereUniqueInput.schema';

export const cityDeleteOneSchema = z.object({
  where: cityWhereUniqueInputObjectSchema,
});
