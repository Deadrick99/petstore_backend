import { z } from 'zod';
import { customeraccountWhereInputObjectSchema } from './objects/customeraccountWhereInput.schema';
import { customeraccountOrderByWithRelationInputObjectSchema } from './objects/customeraccountOrderByWithRelationInput.schema';
import { customeraccountWhereUniqueInputObjectSchema } from './objects/customeraccountWhereUniqueInput.schema';
import { customeraccountScalarFieldEnumSchema } from './enums/customeraccountScalarFieldEnum.schema';

export const customeraccountFindFirstSchema = z.object({
  where: customeraccountWhereInputObjectSchema.optional(),
  orderBy: customeraccountOrderByWithRelationInputObjectSchema.optional(),
  cursor: customeraccountWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(customeraccountScalarFieldEnumSchema).optional(),
});
