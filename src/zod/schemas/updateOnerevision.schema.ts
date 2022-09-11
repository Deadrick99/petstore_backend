import { z } from 'zod';
import { revisionUpdateInputObjectSchema } from './objects/revisionUpdateInput.schema';
import { revisionWhereUniqueInputObjectSchema } from './objects/revisionWhereUniqueInput.schema';

export const revisionUpdateOneSchema = z.object({
  data: revisionUpdateInputObjectSchema,
  where: revisionWhereUniqueInputObjectSchema,
});
