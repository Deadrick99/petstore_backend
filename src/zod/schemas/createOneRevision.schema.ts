import { z } from 'zod';
import { RevisionCreateInputObjectSchema } from './objects/RevisionCreateInput.schema';

export const RevisionCreateOneSchema = z.object({
  data: RevisionCreateInputObjectSchema,
});
