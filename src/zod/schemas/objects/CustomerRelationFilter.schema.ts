import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerRelationFilter> = z
  .object({
    is: z
      .lazy(() => CustomerWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => CustomerWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CustomerRelationFilterObjectSchema = Schema;
