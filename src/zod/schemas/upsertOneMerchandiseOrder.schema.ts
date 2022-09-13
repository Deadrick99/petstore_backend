import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './objects/MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderCreateInputObjectSchema } from './objects/MerchandiseOrderCreateInput.schema';
import { MerchandiseOrderUpdateInputObjectSchema } from './objects/MerchandiseOrderUpdateInput.schema';

export const MerchandiseOrderUpsertSchema = z.object({
  where: MerchandiseOrderWhereUniqueInputObjectSchema,
  create: MerchandiseOrderCreateInputObjectSchema,
  update: MerchandiseOrderUpdateInputObjectSchema,
});
