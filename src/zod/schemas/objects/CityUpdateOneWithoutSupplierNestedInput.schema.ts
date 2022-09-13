import { z } from 'zod';
import { CityCreateWithoutSupplierInputObjectSchema } from './CityCreateWithoutSupplierInput.schema';
import { CityUncheckedCreateWithoutSupplierInputObjectSchema } from './CityUncheckedCreateWithoutSupplierInput.schema';
import { CityCreateOrConnectWithoutSupplierInputObjectSchema } from './CityCreateOrConnectWithoutSupplierInput.schema';
import { CityUpsertWithoutSupplierInputObjectSchema } from './CityUpsertWithoutSupplierInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityUpdateWithoutSupplierInputObjectSchema } from './CityUpdateWithoutSupplierInput.schema';
import { CityUncheckedUpdateWithoutSupplierInputObjectSchema } from './CityUncheckedUpdateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpdateOneWithoutSupplierNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CityCreateWithoutSupplierInputObjectSchema),
            z.lazy(() => CityUncheckedCreateWithoutSupplierInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CityCreateOrConnectWithoutSupplierInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => CityUpsertWithoutSupplierInputObjectSchema)
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
        connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CityUpdateWithoutSupplierInputObjectSchema),
            z.lazy(() => CityUncheckedUpdateWithoutSupplierInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CityUpdateOneWithoutSupplierNestedInputObjectSchema = Schema;
