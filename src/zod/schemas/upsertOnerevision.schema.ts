import { z } from 'zod';
import { revisionWhereUniqueInputObjectSchema } from './objects/revisionWhereUniqueInput.schema';
import { revisionCreateInputObjectSchema } from './objects/revisionCreateInput.schema';
import { revisionUpdateInputObjectSchema } from './objects/revisionUpdateInput.schema';

export const revisionUpsertSchema = z.object({
  where: revisionWhereUniqueInputObjectSchema,
  create: revisionCreateInputObjectSchema,
  update: revisionUpdateInputObjectSchema,
});
