import { z } from 'zod';
import { autonumberWhereInputObjectSchema } from './objects/autonumberWhereInput.schema';
import { autonumberOrderByWithRelationInputObjectSchema } from './objects/autonumberOrderByWithRelationInput.schema';
import { autonumberWhereUniqueInputObjectSchema } from './objects/autonumberWhereUniqueInput.schema';

export const autonumberAggregateSchema = z.object({
  where: autonumberWhereInputObjectSchema.optional(),
  orderBy: autonumberOrderByWithRelationInputObjectSchema.optional(),
  cursor: autonumberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
