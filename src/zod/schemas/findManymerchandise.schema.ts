import { z } from 'zod';
import { merchandiseWhereInputObjectSchema } from './objects/merchandiseWhereInput.schema';
import { merchandiseOrderByWithRelationInputObjectSchema } from './objects/merchandiseOrderByWithRelationInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './objects/merchandiseWhereUniqueInput.schema';
import { merchandiseScalarFieldEnumSchema } from './enums/merchandiseScalarFieldEnum.schema';

export const merchandiseFindManySchema = z.object({
  where: merchandiseWhereInputObjectSchema.optional(),
  orderBy: merchandiseOrderByWithRelationInputObjectSchema.optional(),
  cursor: merchandiseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(merchandiseScalarFieldEnumSchema).optional(),
});
