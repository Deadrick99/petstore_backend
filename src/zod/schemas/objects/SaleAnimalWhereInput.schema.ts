import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { AnimalRelationFilterObjectSchema } from './AnimalRelationFilter.schema';
import { AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';
import { SaleRelationFilterObjectSchema } from './SaleRelationFilter.schema';
import { SaleWhereInputObjectSchema } from './SaleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SaleAnimalWhereInputObjectSchema),
        z.lazy(() => SaleAnimalWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SaleAnimalWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SaleAnimalWhereInputObjectSchema),
        z.lazy(() => SaleAnimalWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ANIMALID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    SALEPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Animal: z
      .union([
        z.lazy(() => AnimalRelationFilterObjectSchema),
        z.lazy(() => AnimalWhereInputObjectSchema),
      ])
      .optional(),
    Sale: z
      .union([
        z.lazy(() => SaleRelationFilterObjectSchema),
        z.lazy(() => SaleWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SaleAnimalWhereInputObjectSchema = Schema;
