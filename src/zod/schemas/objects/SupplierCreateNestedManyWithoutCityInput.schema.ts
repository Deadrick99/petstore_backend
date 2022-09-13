import { z } from 'zod';
import { SupplierCreateWithoutCityInputObjectSchema } from './SupplierCreateWithoutCityInput.schema';
import { SupplierUncheckedCreateWithoutCityInputObjectSchema } from './SupplierUncheckedCreateWithoutCityInput.schema';
import { SupplierCreateOrConnectWithoutCityInputObjectSchema } from './SupplierCreateOrConnectWithoutCityInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateNestedManyWithoutCityInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SupplierCreateWithoutCityInputObjectSchema),
            z.lazy(() => SupplierCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => SupplierUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => SupplierUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SupplierCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => SupplierCreateOrConnectWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SupplierWhereUniqueInputObjectSchema),
            z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SupplierCreateNestedManyWithoutCityInputObjectSchema = Schema;
