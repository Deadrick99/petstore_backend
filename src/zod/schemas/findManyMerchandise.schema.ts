import { z } from 'zod';
import { MerchandiseWhereInputObjectSchema } from './objects/MerchandiseWhereInput.schema';
import { MerchandiseOrderByWithRelationInputObjectSchema } from './objects/MerchandiseOrderByWithRelationInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './objects/MerchandiseWhereUniqueInput.schema';
import { MerchandiseScalarFieldEnumSchema } from './enums/MerchandiseScalarFieldEnum.schema';

export const MerchandiseFindManySchema = z.object({
  where: MerchandiseWhereInputObjectSchema.optional(),
  orderBy: MerchandiseOrderByWithRelationInputObjectSchema.optional(),
  cursor: MerchandiseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MerchandiseScalarFieldEnumSchema).optional(),
});
