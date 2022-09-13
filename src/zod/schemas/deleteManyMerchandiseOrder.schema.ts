import { z } from 'zod';
import { MerchandiseOrderWhereInputObjectSchema } from './objects/MerchandiseOrderWhereInput.schema';

export const MerchandiseOrderDeleteManySchema = z.object({
  where: MerchandiseOrderWhereInputObjectSchema.optional(),
});
