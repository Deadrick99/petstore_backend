import { z } from 'zod';
import { revisionUpdateManyMutationInputObjectSchema } from './objects/revisionUpdateManyMutationInput.schema';
import { revisionWhereInputObjectSchema } from './objects/revisionWhereInput.schema';

export const revisionUpdateManySchema = z.object({
  data: revisionUpdateManyMutationInputObjectSchema,
  where: revisionWhereInputObjectSchema.optional(),
});
