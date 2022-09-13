import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';
import { CityCreateInputObjectSchema } from './objects/CityCreateInput.schema';
import { CityUpdateInputObjectSchema } from './objects/CityUpdateInput.schema';

export const CityUpsertSchema = z.object({
  where: CityWhereUniqueInputObjectSchema,
  create: CityCreateInputObjectSchema,
  update: CityUpdateInputObjectSchema,
});
