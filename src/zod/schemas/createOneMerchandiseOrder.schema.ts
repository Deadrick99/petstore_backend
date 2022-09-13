import { z } from 'zod';
import { MerchandiseOrderCreateInputObjectSchema } from './objects/MerchandiseOrderCreateInput.schema';

export const MerchandiseOrderCreateOneSchema = z.object({
  data: MerchandiseOrderCreateInputObjectSchema,
});
