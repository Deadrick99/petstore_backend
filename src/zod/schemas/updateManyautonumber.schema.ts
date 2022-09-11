import { z } from 'zod';
import { autonumberUpdateManyMutationInputObjectSchema } from './objects/autonumberUpdateManyMutationInput.schema';
import { autonumberWhereInputObjectSchema } from './objects/autonumberWhereInput.schema';

export const autonumberUpdateManySchema = z.object({
  data: autonumberUpdateManyMutationInputObjectSchema,
  where: autonumberWhereInputObjectSchema.optional(),
});
