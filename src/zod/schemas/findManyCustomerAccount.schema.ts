import { z } from 'zod';
import { CustomerAccountWhereInputObjectSchema } from './objects/CustomerAccountWhereInput.schema';
import { CustomerAccountOrderByWithRelationInputObjectSchema } from './objects/CustomerAccountOrderByWithRelationInput.schema';
import { CustomerAccountWhereUniqueInputObjectSchema } from './objects/CustomerAccountWhereUniqueInput.schema';
import { CustomerAccountScalarFieldEnumSchema } from './enums/CustomerAccountScalarFieldEnum.schema';

export const CustomerAccountFindManySchema = z.object({
  where: CustomerAccountWhereInputObjectSchema.optional(),
  orderBy: CustomerAccountOrderByWithRelationInputObjectSchema.optional(),
  cursor: CustomerAccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CustomerAccountScalarFieldEnumSchema).optional(),
});
