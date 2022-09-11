import { z } from 'zod';
import { saleanimalUpdateInputObjectSchema } from './objects/saleanimalUpdateInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './objects/saleanimalWhereUniqueInput.schema';

export const saleanimalUpdateOneSchema = z.object({
  data: saleanimalUpdateInputObjectSchema,
  where: saleanimalWhereUniqueInputObjectSchema,
});
