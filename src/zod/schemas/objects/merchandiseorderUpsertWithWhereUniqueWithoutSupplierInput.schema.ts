import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithoutSupplierInputObjectSchema } from './merchandiseorderUpdateWithoutSupplierInput.schema';
import { merchandiseorderUncheckedUpdateWithoutSupplierInputObjectSchema } from './merchandiseorderUncheckedUpdateWithoutSupplierInput.schema';
import { merchandiseorderCreateWithoutSupplierInputObjectSchema } from './merchandiseorderCreateWithoutSupplierInput.schema';
import { merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpsertWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => merchandiseorderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => merchandiseorderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
