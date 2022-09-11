import { z } from 'zod';
import { autonumberCreateInputObjectSchema } from './objects/autonumberCreateInput.schema';

export const autonumberCreateOneSchema = z.object({
  data: autonumberCreateInputObjectSchema,
});
