import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { SaleRelationFilterObjectSchema } from './SaleRelationFilter.schema';
import { saleWhereInputObjectSchema } from './saleWhereInput.schema';
import { AnimalRelationFilterObjectSchema } from './AnimalRelationFilter.schema';
import { animalWhereInputObjectSchema } from './animalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleanimalWhereInputObjectSchema),
        z.lazy(() => saleanimalWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleanimalWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleanimalWhereInputObjectSchema),
        z.lazy(() => saleanimalWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    SALEPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    sale: z
      .union([
        z.lazy(() => SaleRelationFilterObjectSchema),
        z.lazy(() => saleWhereInputObjectSchema),
      ])
      .optional(),
    animal: z
      .union([
        z.lazy(() => AnimalRelationFilterObjectSchema),
        z.lazy(() => animalWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const saleanimalWhereInputObjectSchema = Schema;
