import { z } from 'zod';
import { AutoNumberWhereInputObjectSchema } from './objects/AutoNumberWhereInput.schema';
import { AutoNumberOrderByWithAggregationInputObjectSchema } from './objects/AutoNumberOrderByWithAggregationInput.schema';
import { AutoNumberScalarWhereWithAggregatesInputObjectSchema } from './objects/AutoNumberScalarWhereWithAggregatesInput.schema';
import { AutoNumberScalarFieldEnumSchema } from './enums/AutoNumberScalarFieldEnum.schema';

export const AutoNumberGroupBySchema = z.object({
  where: AutoNumberWhereInputObjectSchema.optional(),
  orderBy: AutoNumberOrderByWithAggregationInputObjectSchema,
  having: AutoNumberScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AutoNumberScalarFieldEnumSchema),
});
