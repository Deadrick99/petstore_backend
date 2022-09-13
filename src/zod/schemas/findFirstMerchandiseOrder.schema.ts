import { z } from 'zod';
import { MerchandiseOrderWhereInputObjectSchema } from './objects/MerchandiseOrderWhereInput.schema';
import { MerchandiseOrderOrderByWithRelationInputObjectSchema } from './objects/MerchandiseOrderOrderByWithRelationInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './objects/MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderScalarFieldEnumSchema } from './enums/MerchandiseOrderScalarFieldEnum.schema';

export const MerchandiseOrderFindFirstSchema = z.object({
  where: MerchandiseOrderWhereInputObjectSchema.optional(),
  orderBy: MerchandiseOrderOrderByWithRelationInputObjectSchema.optional(),
  cursor: MerchandiseOrderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MerchandiseOrderScalarFieldEnumSchema).optional(),
});
