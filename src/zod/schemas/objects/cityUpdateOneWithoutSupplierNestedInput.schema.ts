import { z } from 'zod';
import { cityCreateWithoutSupplierInputObjectSchema } from './cityCreateWithoutSupplierInput.schema';
import { cityUncheckedCreateWithoutSupplierInputObjectSchema } from './cityUncheckedCreateWithoutSupplierInput.schema';
import { cityCreateOrConnectWithoutSupplierInputObjectSchema } from './cityCreateOrConnectWithoutSupplierInput.schema';
import { cityUpsertWithoutSupplierInputObjectSchema } from './cityUpsertWithoutSupplierInput.schema';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';
import { cityUpdateWithoutSupplierInputObjectSchema } from './cityUpdateWithoutSupplierInput.schema';
import { cityUncheckedUpdateWithoutSupplierInputObjectSchema } from './cityUncheckedUpdateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUpdateOneWithoutSupplierNestedInput> =
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
        upsert: z
          .lazy(() => cityUpsertWithoutSupplierInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => cityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => cityUpdateWithoutSupplierInputObjectSchema),
            z.lazy(() => cityUncheckedUpdateWithoutSupplierInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const cityUpdateOneWithoutSupplierNestedInputObjectSchema = Schema;
