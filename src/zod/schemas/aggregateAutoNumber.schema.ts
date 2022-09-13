import { z } from 'zod';
import { AutoNumberWhereInputObjectSchema } from './objects/AutoNumberWhereInput.schema';
import { AutoNumberOrderByWithRelationInputObjectSchema } from './objects/AutoNumberOrderByWithRelationInput.schema';
import { AutoNumberWhereUniqueInputObjectSchema } from './objects/AutoNumberWhereUniqueInput.schema';

export const AutoNumberAggregateSchema = z.object({
  where: AutoNumberWhereInputObjectSchema.optional(),
  orderBy: AutoNumberOrderByWithRelationInputObjectSchema.optional(),
  cursor: AutoNumberWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
