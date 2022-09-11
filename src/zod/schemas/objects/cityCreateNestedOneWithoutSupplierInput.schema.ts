import { z } from 'zod';
import { cityCreateWithoutSupplierInputObjectSchema } from './cityCreateWithoutSupplierInput.schema';
import { cityUncheckedCreateWithoutSupplierInputObjectSchema } from './cityUncheckedCreateWithoutSupplierInput.schema';
import { cityCreateOrConnectWithoutSupplierInputObjectSchema } from './cityCreateOrConnectWithoutSupplierInput.schema';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateNestedOneWithoutSupplierInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => cityCreateWithoutSupplierInputObjectSchema),
            z.lazy(() => cityUncheckedCreateWithoutSupplierInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => cityCreateOrConnectWithoutSupplierInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => cityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const cityCreateNestedOneWithoutSupplierInputObjectSchema = Schema;
