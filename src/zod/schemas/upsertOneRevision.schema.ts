import { z } from 'zod';
import { RevisionWhereUniqueInputObjectSchema } from './objects/RevisionWhereUniqueInput.schema';
import { RevisionCreateInputObjectSchema } from './objects/RevisionCreateInput.schema';
import { RevisionUpdateInputObjectSchema } from './objects/RevisionUpdateInput.schema';

export const RevisionUpsertSchema = z.object({
  where: RevisionWhereUniqueInputObjectSchema,
  create: RevisionCreateInputObjectSchema,
  update: RevisionUpdateInputObjectSchema,
});
