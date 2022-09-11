import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { AnimalorderRelationFilterObjectSchema } from './AnimalorderRelationFilter.schema';
import { animalorderWhereInputObjectSchema } from './animalorderWhereInput.schema';
import { AnimalRelationFilterObjectSchema } from './AnimalRelationFilter.schema';
import { animalWhereInputObjectSchema } from './animalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => animalorderitemWhereInputObjectSchema),
        z.lazy(() => animalorderitemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => animalorderitemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => animalorderitemWhereInputObjectSchema),
        z.lazy(() => animalorderitemWhereInputObjectSchema).array(),
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
    animalorder: z
      .union([
        z.lazy(() => AnimalorderRelationFilterObjectSchema),
        z.lazy(() => animalorderWhereInputObjectSchema),
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

export const animalorderitemWhereInputObjectSchema = Schema;
