import { z } from 'zod';
import { orderitemCreateWithoutMerchandiseInputObjectSchema } from './orderitemCreateWithoutMerchandiseInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseInput.schema';
import { orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './orderitemCreateOrConnectWithoutMerchandiseInput.schema';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateNestedManyWithoutMerchandiseInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => orderitemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => orderitemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
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

export const orderitemCreateNestedManyWithoutMerchandiseInputObjectSchema =
  Schema;
