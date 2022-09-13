import { z } from 'zod';
import { SaleItemCreateWithoutMerchandiseInputObjectSchema } from './SaleItemCreateWithoutMerchandiseInput.schema';
import { SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedCreateWithoutMerchandiseInput.schema';
import { SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './SaleItemCreateOrConnectWithoutMerchandiseInput.schema';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUncheckedCreateNestedManyWithoutMerchandiseInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleItemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => SaleItemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema =
  Schema;
