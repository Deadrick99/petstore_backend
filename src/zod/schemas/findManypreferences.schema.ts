import { z } from 'zod';
import { preferencesWhereInputObjectSchema } from './objects/preferencesWhereInput.schema';
import { preferencesOrderByWithRelationInputObjectSchema } from './objects/preferencesOrderByWithRelationInput.schema';
import { preferencesWhereUniqueInputObjectSchema } from './objects/preferencesWhereUniqueInput.schema';
import { preferencesScalarFieldEnumSchema } from './enums/preferencesScalarFieldEnum.schema';

export const preferencesFindManySchema = z.object({
  where: preferencesWhereInputObjectSchema.optional(),
  orderBy: preferencesOrderByWithRelationInputObjectSchema.optional(),
  cursor: preferencesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(preferencesScalarFieldEnumSchema).optional(),
});
