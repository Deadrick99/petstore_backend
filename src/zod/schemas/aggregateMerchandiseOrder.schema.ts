import { z } from 'zod';
import { MerchandiseOrderWhereInputObjectSchema } from './objects/MerchandiseOrderWhereInput.schema';
import { MerchandiseOrderOrderByWithRelationInputObjectSchema } from './objects/MerchandiseOrderOrderByWithRelationInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './objects/MerchandiseOrderWhereUniqueInput.schema';

export const MerchandiseOrderAggregateSchema = z.object({
  where: MerchandiseOrderWhereInputObjectSchema.optional(),
  orderBy: MerchandiseOrderOrderByWithRelationInputObjectSchema.optional(),
  cursor: MerchandiseOrderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
