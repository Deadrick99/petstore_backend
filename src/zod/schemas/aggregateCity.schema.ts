import { z } from 'zod';
import { CityWhereInputObjectSchema } from './objects/CityWhereInput.schema';
import { CityOrderByWithRelationInputObjectSchema } from './objects/CityOrderByWithRelationInput.schema';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';

export const CityAggregateSchema = z.object({
  where: CityWhereInputObjectSchema.optional(),
  orderBy: CityOrderByWithRelationInputObjectSchema.optional(),
  cursor: CityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
