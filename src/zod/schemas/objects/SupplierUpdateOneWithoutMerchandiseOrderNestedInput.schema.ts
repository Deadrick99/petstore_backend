import { z } from 'zod';
import { SupplierCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateWithoutMerchandiseOrderInput.schema';
import { SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutMerchandiseOrderInput.schema';
import { SupplierCreateOrConnectWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateOrConnectWithoutMerchandiseOrderInput.schema';
import { SupplierUpsertWithoutMerchandiseOrderInputObjectSchema } from './SupplierUpsertWithoutMerchandiseOrderInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUpdateWithoutMerchandiseOrderInput.schema';
import { SupplierUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUncheckedUpdateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateOneWithoutMerchandiseOrderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => SupplierCreateWithoutMerchandiseOrderInputObjectSchema,
            ),
            z.lazy(
              () =>
                SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () =>
              SupplierCreateOrConnectWithoutMerchandiseOrderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => SupplierUpsertWithoutMerchandiseOrderInputObjectSchema)
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
        connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => SupplierUpdateWithoutMerchandiseOrderInputObjectSchema,
            ),
            z.lazy(
              () =>
                SupplierUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SupplierUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema =
  Schema;
