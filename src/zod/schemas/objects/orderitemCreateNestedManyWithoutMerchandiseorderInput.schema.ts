import { z } from 'zod';
import { orderitemCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateWithoutMerchandiseorderInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseorderInput.schema';
import { orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateOrConnectWithoutMerchandiseorderInput.schema';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateNestedManyWithoutMerchandiseorderInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => orderitemCreateWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () => orderitemCreateWithoutMerchandiseorderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
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
                orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema,
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
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const orderitemCreateNestedManyWithoutMerchandiseorderInputObjectSchema =
  Schema;
