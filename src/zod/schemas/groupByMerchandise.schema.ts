import { z } from 'zod';
import { MerchandiseWhereInputObjectSchema } from './objects/MerchandiseWhereInput.schema';
import { MerchandiseOrderByWithAggregationInputObjectSchema } from './objects/MerchandiseOrderByWithAggregationInput.schema';
import { MerchandiseScalarWhereWithAggregatesInputObjectSchema } from './objects/MerchandiseScalarWhereWithAggregatesInput.schema';
import { MerchandiseScalarFieldEnumSchema } from './enums/MerchandiseScalarFieldEnum.schema';

export const MerchandiseGroupBySchema = z.object({
  where: MerchandiseWhereInputObjectSchema.optional(),
  orderBy: MerchandiseOrderByWithAggregationInputObjectSchema,
  having: MerchandiseScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MerchandiseScalarFieldEnumSchema),
});
