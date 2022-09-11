import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => animalorderitemScalarWhereInputObjectSchema),
        z.lazy(() => animalorderitemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => animalorderitemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => animalorderitemScalarWhereInputObjectSchema),
        z.lazy(() => animalorderitemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    ORDERID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    COST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const animalorderitemScalarWhereInputObjectSchema = Schema;
