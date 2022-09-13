import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './objects/CustomerOrderByWithRelationInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';
import { CustomerScalarFieldEnumSchema } from './enums/CustomerScalarFieldEnum.schema';

export const CustomerFindManySchema = z.object({
  where: CustomerWhereInputObjectSchema.optional(),
  orderBy: CustomerOrderByWithRelationInputObjectSchema.optional(),
  cursor: CustomerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CustomerScalarFieldEnumSchema).optional(),
});
