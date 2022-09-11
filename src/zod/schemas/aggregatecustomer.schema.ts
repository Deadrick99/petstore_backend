import { z } from 'zod';
import { customerWhereInputObjectSchema } from './objects/customerWhereInput.schema';
import { customerOrderByWithRelationInputObjectSchema } from './objects/customerOrderByWithRelationInput.schema';
import { customerWhereUniqueInputObjectSchema } from './objects/customerWhereUniqueInput.schema';

export const customerAggregateSchema = z.object({
  where: customerWhereInputObjectSchema.optional(),
  orderBy: customerOrderByWithRelationInputObjectSchema.optional(),
  cursor: customerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
