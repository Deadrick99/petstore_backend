import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderCreateWithoutSupplierInputObjectSchema } from './merchandiseorderCreateWithoutSupplierInput.schema';
import { merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateOrConnectWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => merchandiseorderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema =
  Schema;
