import { z } from 'zod';
import { merchandiseorderWhereInputObjectSchema } from './objects/merchandiseorderWhereInput.schema';
import { merchandiseorderOrderByWithRelationInputObjectSchema } from './objects/merchandiseorderOrderByWithRelationInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './objects/merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderScalarFieldEnumSchema } from './enums/merchandiseorderScalarFieldEnum.schema';

export const merchandiseorderFindManySchema = z.object({
  where: merchandiseorderWhereInputObjectSchema.optional(),
  orderBy: merchandiseorderOrderByWithRelationInputObjectSchema.optional(),
  cursor: merchandiseorderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(merchandiseorderScalarFieldEnumSchema).optional(),
});
