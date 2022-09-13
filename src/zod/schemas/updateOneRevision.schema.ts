import { z } from 'zod';
import { RevisionUpdateInputObjectSchema } from './objects/RevisionUpdateInput.schema';
import { RevisionWhereUniqueInputObjectSchema } from './objects/RevisionWhereUniqueInput.schema';

export const RevisionUpdateOneSchema = z.object({
  data: RevisionUpdateInputObjectSchema,
  where: RevisionWhereUniqueInputObjectSchema,
});
