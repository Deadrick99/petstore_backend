import { z } from 'zod';
import { RevisionWhereInputObjectSchema } from './objects/RevisionWhereInput.schema';

export const RevisionDeleteManySchema = z.object({
  where: RevisionWhereInputObjectSchema.optional(),
});
