import { z } from 'zod';
import { autonumberWhereInputObjectSchema } from './objects/autonumberWhereInput.schema';
import { autonumberOrderByWithAggregationInputObjectSchema } from './objects/autonumberOrderByWithAggregationInput.schema';
import { autonumberScalarWhereWithAggregatesInputObjectSchema } from './objects/autonumberScalarWhereWithAggregatesInput.schema';
import { autonumberScalarFieldEnumSchema } from './enums/autonumberScalarFieldEnum.schema';

export const autonumberGroupBySchema = z.object({
  where: autonumberWhereInputObjectSchema.optional(),
  orderBy: autonumberOrderByWithAggregationInputObjectSchema,
  having: autonumberScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(autonumberScalarFieldEnumSchema),
});
