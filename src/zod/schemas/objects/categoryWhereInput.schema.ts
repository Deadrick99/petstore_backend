import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { AnimalListRelationFilterObjectSchema } from './AnimalListRelationFilter.schema';
import { BreedListRelationFilterObjectSchema } from './BreedListRelationFilter.schema';
import { MerchandiseListRelationFilterObjectSchema } from './MerchandiseListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => categoryWhereInputObjectSchema),
        z.lazy(() => categoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => categoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => categoryWhereInputObjectSchema),
        z.lazy(() => categoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    REGISTRATION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    animal: z.lazy(() => AnimalListRelationFilterObjectSchema).optional(),
    breed: z.lazy(() => BreedListRelationFilterObjectSchema).optional(),
    merchandise: z
      .lazy(() => MerchandiseListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const categoryWhereInputObjectSchema = Schema;
