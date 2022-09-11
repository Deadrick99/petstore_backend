import { z } from 'zod';
import { revisionWhereInputObjectSchema } from './objects/revisionWhereInput.schema';

export const revisionDeleteManySchema = z.object({
  where: revisionWhereInputObjectSchema.optional(),
});
