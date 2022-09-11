import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { categoryWhereInputObjectSchema } from './categoryWhereInput.schema';
import { AnimalListRelationFilterObjectSchema } from './AnimalListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => breedWhereInputObjectSchema),
        z.lazy(() => breedWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => breedWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => breedWhereInputObjectSchema),
        z.lazy(() => breedWhereInputObjectSchema).array(),
      ])
      .optional(),
    CATEGORY: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    BREED: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => categoryWhereInputObjectSchema),
      ])
      .optional(),
    animal: z.lazy(() => AnimalListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const breedWhereInputObjectSchema = Schema;
