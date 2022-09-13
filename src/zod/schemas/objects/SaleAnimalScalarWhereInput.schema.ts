import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SaleAnimalScalarWhereInputObjectSchema),
        z.lazy(() => SaleAnimalScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SaleAnimalScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SaleAnimalScalarWhereInputObjectSchema),
        z.lazy(() => SaleAnimalScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const SaleAnimalScalarWhereInputObjectSchema = Schema;
