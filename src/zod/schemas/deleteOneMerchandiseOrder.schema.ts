import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './objects/MerchandiseOrderWhereUniqueInput.schema';

export const MerchandiseOrderDeleteOneSchema = z.object({
  where: MerchandiseOrderWhereUniqueInputObjectSchema,
});
