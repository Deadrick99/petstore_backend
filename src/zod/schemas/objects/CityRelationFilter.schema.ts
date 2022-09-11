import { z } from 'zod';
import { cityWhereInputObjectSchema } from './cityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityRelationFilter> = z
  .object({
    is: z
      .lazy(() => cityWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => cityWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const CityRelationFilterObjectSchema = Schema;
