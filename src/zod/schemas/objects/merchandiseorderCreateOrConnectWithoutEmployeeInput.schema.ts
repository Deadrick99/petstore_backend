import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateWithoutEmployeeInput.schema';
import { merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateOrConnectWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => merchandiseorderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema =
  Schema;
