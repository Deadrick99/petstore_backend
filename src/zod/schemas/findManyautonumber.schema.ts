import { z } from 'zod';
import { autonumberWhereInputObjectSchema } from './objects/autonumberWhereInput.schema';
import { autonumberOrderByWithRelationInputObjectSchema } from './objects/autonumberOrderByWithRelationInput.schema';
import { autonumberWhereUniqueInputObjectSchema } from './objects/autonumberWhereUniqueInput.schema';
import { autonumberScalarFieldEnumSchema } from './enums/autonumberScalarFieldEnum.schema';

export const autonumberFindManySchema = z.object({
  where: autonumberWhereInputObjectSchema.optional(),
  orderBy: autonumberOrderByWithRelationInputObjectSchema.optional(),
  cursor: autonumberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(autonumberScalarFieldEnumSchema).optional(),
});
