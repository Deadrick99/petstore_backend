import { z } from 'zod';
import { RevisionWhereUniqueInputObjectSchema } from './objects/RevisionWhereUniqueInput.schema';

export const RevisionFindUniqueSchema = z.object({
  where: RevisionWhereUniqueInputObjectSchema,
});
