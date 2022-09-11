import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateWithoutOrderitemInput.schema';
import { merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateOrConnectWithoutOrderitemInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => merchandiseorderCreateWithoutOrderitemInputObjectSchema),
        z.lazy(
          () =>
            merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderCreateOrConnectWithoutOrderitemInputObjectSchema =
  Schema;
