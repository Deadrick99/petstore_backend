import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { AnimalListRelationFilterObjectSchema } from './AnimalListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BreedWhereInputObjectSchema),
        z.lazy(() => BreedWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BreedWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BreedWhereInputObjectSchema),
        z.lazy(() => BreedWhereInputObjectSchema).array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    BREED: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional(),
    Animal: z.lazy(() => AnimalListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const BreedWhereInputObjectSchema = Schema;
