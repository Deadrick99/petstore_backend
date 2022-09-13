import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './objects/CityWhereUniqueInput.schema';

export const CityDeleteOneSchema = z.object({
  where: CityWhereUniqueInputObjectSchema,
});
