import { z } from 'zod';
import { CityUpdateInputObjectSchema } from './objects/CityUpdateInput.schema';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';

export const CityUpdateOneSchema = z.object({
  data: CityUpdateInputObjectSchema,
  where: CityWhereUniqueInputObjectSchema,
});
