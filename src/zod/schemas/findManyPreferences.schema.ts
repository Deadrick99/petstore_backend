import { z } from 'zod';
import { PreferencesWhereInputObjectSchema } from './objects/PreferencesWhereInput.schema';
import { PreferencesOrderByWithRelationInputObjectSchema } from './objects/PreferencesOrderByWithRelationInput.schema';
import { PreferencesWhereUniqueInputObjectSchema } from './objects/PreferencesWhereUniqueInput.schema';
import { PreferencesScalarFieldEnumSchema } from './enums/PreferencesScalarFieldEnum.schema';

export const PreferencesFindManySchema = z.object({
  where: PreferencesWhereInputObjectSchema.optional(),
  orderBy: PreferencesOrderByWithRelationInputObjectSchema.optional(),
  cursor: PreferencesWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PreferencesScalarFieldEnumSchema).optional(),
});
