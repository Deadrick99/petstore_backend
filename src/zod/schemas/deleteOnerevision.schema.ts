import { z } from 'zod';
import { revisionWhereUniqueInputObjectSchema } from './objects/revisionWhereUniqueInput.schema';

export const revisionDeleteOneSchema = z.object({
  where: revisionWhereUniqueInputObjectSchema,
});
