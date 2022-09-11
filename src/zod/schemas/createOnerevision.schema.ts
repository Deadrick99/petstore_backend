import { z } from 'zod';
import { revisionCreateInputObjectSchema } from './objects/revisionCreateInput.schema';

export const revisionCreateOneSchema = z.object({
  data: revisionCreateInputObjectSchema,
});
