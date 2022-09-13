import { z } from 'zod';
import { MerchandiseOrderCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutSupplierInput.schema';
import { MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateOrConnectWithoutSupplierInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateNestedManyWithoutSupplierInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => MerchandiseOrderCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () => MerchandiseOrderCreateWithoutSupplierInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () =>
                MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseOrderCreateNestedManyWithoutSupplierInputObjectSchema =
  Schema;
