import { z } from 'zod';
import { MerchandiseOrderUpdateInputObjectSchema } from './objects/MerchandiseOrderUpdateInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './objects/MerchandiseOrderWhereUniqueInput.schema';

export const MerchandiseOrderUpdateOneSchema = z.object({
  data: MerchandiseOrderUpdateInputObjectSchema,
  where: MerchandiseOrderWhereUniqueInputObjectSchema,
});
