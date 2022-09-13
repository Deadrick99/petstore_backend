import { z } from 'zod';
import { MerchandiseCreateInputObjectSchema } from './objects/MerchandiseCreateInput.schema';

export const MerchandiseCreateOneSchema = z.object({
  data: MerchandiseCreateInputObjectSchema,
});
