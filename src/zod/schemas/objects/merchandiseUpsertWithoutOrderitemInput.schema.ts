import { z } from 'zod';
import { merchandiseUpdateWithoutOrderitemInputObjectSchema } from './merchandiseUpdateWithoutOrderitemInput.schema';
import { merchandiseUncheckedUpdateWithoutOrderitemInputObjectSchema } from './merchandiseUncheckedUpdateWithoutOrderitemInput.schema';
import { merchandiseCreateWithoutOrderitemInputObjectSchema } from './merchandiseCreateWithoutOrderitemInput.schema';
import { merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpsertWithoutOrderitemInput> = z
  .object({
    update: z.union([
      z.lazy(() => merchandiseUpdateWithoutOrderitemInputObjectSchema),
      z.lazy(() => merchandiseUncheckedUpdateWithoutOrderitemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => merchandiseCreateWithoutOrderitemInputObjectSchema),
      z.lazy(() => merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema),
    ]),
  })
  .strict();

export const merchandiseUpsertWithoutOrderitemInputObjectSchema = Schema;
