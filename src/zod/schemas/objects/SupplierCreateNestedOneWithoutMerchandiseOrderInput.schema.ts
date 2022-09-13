import { z } from 'zod';
import { SupplierCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateWithoutMerchandiseOrderInput.schema';
import { SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutMerchandiseOrderInput.schema';
import { SupplierCreateOrConnectWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateOrConnectWithoutMerchandiseOrderInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateNestedOneWithoutMerchandiseOrderInput> =
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
        connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const SupplierCreateNestedOneWithoutMerchandiseOrderInputObjectSchema =
  Schema;
