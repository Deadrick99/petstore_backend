import { z } from 'zod';
import { autonumberWhereInputObjectSchema } from './objects/autonumberWhereInput.schema';

export const autonumberDeleteManySchema = z.object({
  where: autonumberWhereInputObjectSchema.optional(),
});
