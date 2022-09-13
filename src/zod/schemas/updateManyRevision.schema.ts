import { z } from 'zod';
import { RevisionUpdateManyMutationInputObjectSchema } from './objects/RevisionUpdateManyMutationInput.schema';
import { RevisionWhereInputObjectSchema } from './objects/RevisionWhereInput.schema';

export const RevisionUpdateManySchema = z.object({
  data: RevisionUpdateManyMutationInputObjectSchema,
  where: RevisionWhereInputObjectSchema.optional(),
});
