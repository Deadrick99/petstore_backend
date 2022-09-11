import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './objects/saleanimalWhereUniqueInput.schema';

export const saleanimalFindUniqueSchema = z.object({
  where: saleanimalWhereUniqueInputObjectSchema,
});
