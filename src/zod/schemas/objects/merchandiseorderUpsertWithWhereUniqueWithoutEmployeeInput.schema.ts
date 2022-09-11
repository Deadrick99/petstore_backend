import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithoutEmployeeInputObjectSchema } from './merchandiseorderUpdateWithoutEmployeeInput.schema';
import { merchandiseorderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedUpdateWithoutEmployeeInput.schema';
import { merchandiseorderCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateWithoutEmployeeInput.schema';
import { merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => merchandiseorderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => merchandiseorderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
