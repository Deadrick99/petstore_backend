import { z } from 'zod';
import { CityCreateInputObjectSchema } from './objects/CityCreateInput.schema';

export const CityCreateOneSchema = z.object({
  data: CityCreateInputObjectSchema,
});
