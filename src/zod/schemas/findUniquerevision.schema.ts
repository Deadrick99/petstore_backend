import { z } from 'zod';
import { revisionWhereUniqueInputObjectSchema } from './objects/revisionWhereUniqueInput.schema';

export const revisionFindUniqueSchema = z.object({
  where: revisionWhereUniqueInputObjectSchema,
});
