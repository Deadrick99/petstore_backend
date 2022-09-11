import { z } from 'zod';
import { saleanimalWhereInputObjectSchema } from './objects/saleanimalWhereInput.schema';

export const saleanimalDeleteManySchema = z.object({
  where: saleanimalWhereInputObjectSchema.optional(),
});
