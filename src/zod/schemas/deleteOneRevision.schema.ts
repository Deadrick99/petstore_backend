import { z } from 'zod';
import { RevisionWhereUniqueInputObjectSchema } from './objects/RevisionWhereUniqueInput.schema';

export const RevisionDeleteOneSchema = z.object({
  where: RevisionWhereUniqueInputObjectSchema,
});
