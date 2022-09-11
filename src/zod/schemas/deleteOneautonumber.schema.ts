import { z } from 'zod';
import { autonumberWhereUniqueInputObjectSchema } from './objects/autonumberWhereUniqueInput.schema';

export const autonumberDeleteOneSchema = z.object({
  where: autonumberWhereUniqueInputObjectSchema,
});
