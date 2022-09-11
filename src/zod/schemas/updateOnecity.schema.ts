import { z } from 'zod';
import { cityUpdateInputObjectSchema } from './objects/cityUpdateInput.schema';
import { cityWhereUniqueInputObjectSchema } from './objects/cityWhereUniqueInput.schema';

export const cityUpdateOneSchema = z.object({
  data: cityUpdateInputObjectSchema,
  where: cityWhereUniqueInputObjectSchema,
});
