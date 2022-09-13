import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';

export const CityFindUniqueSchema = z.object({
  where: CityWhereUniqueInputObjectSchema,
});
