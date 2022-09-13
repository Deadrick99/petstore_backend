import { z } from 'zod';
import { MerchandiseOrderWhereInputObjectSchema } from './objects/MerchandiseOrderWhereInput.schema';
import { MerchandiseOrderOrderByWithAggregationInputObjectSchema } from './objects/MerchandiseOrderOrderByWithAggregationInput.schema';
import { MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema } from './objects/MerchandiseOrderScalarWhereWithAggregatesInput.schema';
import { MerchandiseOrderScalarFieldEnumSchema } from './enums/MerchandiseOrderScalarFieldEnum.schema';

export const MerchandiseOrderGroupBySchema = z.object({
  where: MerchandiseOrderWhereInputObjectSchema.optional(),
  orderBy: MerchandiseOrderOrderByWithAggregationInputObjectSchema,
  having: MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MerchandiseOrderScalarFieldEnumSchema),
});
