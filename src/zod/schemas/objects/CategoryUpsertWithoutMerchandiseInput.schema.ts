import { z } from 'zod';
import { CategoryUpdateWithoutMerchandiseInputObjectSchema } from './CategoryUpdateWithoutMerchandiseInput.schema';
import { CategoryUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './CategoryUncheckedUpdateWithoutMerchandiseInput.schema';
import { CategoryCreateWithoutMerchandiseInputObjectSchema } from './CategoryCreateWithoutMerchandiseInput.schema';
import { CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './CategoryUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutMerchandiseInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutMerchandiseInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutMerchandiseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutMerchandiseInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutMerchandiseInputObjectSchema = Schema;
