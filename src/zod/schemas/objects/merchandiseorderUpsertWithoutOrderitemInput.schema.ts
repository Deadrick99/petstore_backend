import { z } from 'zod';
import { merchandiseorderUpdateWithoutOrderitemInputObjectSchema } from './merchandiseorderUpdateWithoutOrderitemInput.schema';
import { merchandiseorderUncheckedUpdateWithoutOrderitemInputObjectSchema } from './merchandiseorderUncheckedUpdateWithoutOrderitemInput.schema';
import { merchandiseorderCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateWithoutOrderitemInput.schema';
import { merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpsertWithoutOrderitemInput> = z
  .object({
    update: z.union([
      z.lazy(() => merchandiseorderUpdateWithoutOrderitemInputObjectSchema),
      z.lazy(
        () => merchandiseorderUncheckedUpdateWithoutOrderitemInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => merchandiseorderCreateWithoutOrderitemInputObjectSchema),
      z.lazy(
        () => merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const merchandiseorderUpsertWithoutOrderitemInputObjectSchema = Schema;
