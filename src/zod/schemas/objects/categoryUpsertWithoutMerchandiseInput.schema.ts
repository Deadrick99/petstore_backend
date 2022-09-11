import { z } from 'zod';
import { categoryUpdateWithoutMerchandiseInputObjectSchema } from './categoryUpdateWithoutMerchandiseInput.schema';
import { categoryUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './categoryUncheckedUpdateWithoutMerchandiseInput.schema';
import { categoryCreateWithoutMerchandiseInputObjectSchema } from './categoryCreateWithoutMerchandiseInput.schema';
import { categoryUncheckedCreateWithoutMerchandiseInputObjectSchema } from './categoryUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpsertWithoutMerchandiseInput> = z
  .object({
    update: z.union([
      z.lazy(() => categoryUpdateWithoutMerchandiseInputObjectSchema),
      z.lazy(() => categoryUncheckedUpdateWithoutMerchandiseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => categoryCreateWithoutMerchandiseInputObjectSchema),
      z.lazy(() => categoryUncheckedCreateWithoutMerchandiseInputObjectSchema),
    ]),
  })
  .strict();

export const categoryUpsertWithoutMerchandiseInputObjectSchema = Schema;
