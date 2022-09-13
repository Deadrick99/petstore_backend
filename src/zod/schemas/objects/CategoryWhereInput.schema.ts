import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { AnimalListRelationFilterObjectSchema } from './AnimalListRelationFilter.schema';
import { BreedListRelationFilterObjectSchema } from './BreedListRelationFilter.schema';
import { MerchandiseListRelationFilterObjectSchema } from './MerchandiseListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    REGISTRATION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Animal: z.lazy(() => AnimalListRelationFilterObjectSchema).optional(),
    Breed: z.lazy(() => BreedListRelationFilterObjectSchema).optional(),
    Merchandise: z
      .lazy(() => MerchandiseListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryWhereInputObjectSchema = Schema;
