import { z } from 'zod';
import { customerWhereInputObjectSchema } from './customerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerRelationFilter> = z
  .object({
    is: z
      .lazy(() => customerWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => customerWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CustomerRelationFilterObjectSchema = Schema;
