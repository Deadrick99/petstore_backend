import { z } from 'zod';
import { cityWhereUniqueInputObjectSchema } from './objects/cityWhereUniqueInput.schema';

export const cityFindUniqueSchema = z.object({
  where: cityWhereUniqueInputObjectSchema,
});
