import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './objects/saleanimalWhereUniqueInput.schema';

export const saleanimalDeleteOneSchema = z.object({
  where: saleanimalWhereUniqueInputObjectSchema,
});
