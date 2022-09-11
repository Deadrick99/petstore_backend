import { z } from 'zod';
import { saleanimalUpdateManyMutationInputObjectSchema } from './objects/saleanimalUpdateManyMutationInput.schema';
import { saleanimalWhereInputObjectSchema } from './objects/saleanimalWhereInput.schema';

export const saleanimalUpdateManySchema = z.object({
  data: saleanimalUpdateManyMutationInputObjectSchema,
  where: saleanimalWhereInputObjectSchema.optional(),
});
