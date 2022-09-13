import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema),
        z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnimalOrderItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema),
        z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    ORDERID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    COST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const AnimalOrderItemScalarWhereInputObjectSchema = Schema;
