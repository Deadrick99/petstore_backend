import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { AnimalRelationFilterObjectSchema } from './AnimalRelationFilter.schema';
import { AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';
import { AnimalOrderRelationFilterObjectSchema } from './AnimalOrderRelationFilter.schema';
import { AnimalOrderWhereInputObjectSchema } from './AnimalOrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnimalOrderItemWhereInputObjectSchema),
        z.lazy(() => AnimalOrderItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnimalOrderItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnimalOrderItemWhereInputObjectSchema),
        z.lazy(() => AnimalOrderItemWhereInputObjectSchema).array(),
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
    Animal: z
      .union([
        z.lazy(() => AnimalRelationFilterObjectSchema),
        z.lazy(() => AnimalWhereInputObjectSchema),
      ])
      .optional(),
    AnimalOrder: z
      .union([
        z.lazy(() => AnimalOrderRelationFilterObjectSchema),
        z.lazy(() => AnimalOrderWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AnimalOrderItemWhereInputObjectSchema = Schema;
