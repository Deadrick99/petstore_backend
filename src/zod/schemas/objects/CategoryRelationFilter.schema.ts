import { z } from 'zod';
import { categoryWhereInputObjectSchema } from './categoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryRelationFilter> = z
  .object({
    is: z
      .lazy(() => categoryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => categoryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CategoryRelationFilterObjectSchema = Schema;
