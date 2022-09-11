import { z } from 'zod';
import { saleitemCreateWithoutMerchandiseInputObjectSchema } from './saleitemCreateWithoutMerchandiseInput.schema';
import { saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedCreateWithoutMerchandiseInput.schema';
import { saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './saleitemCreateOrConnectWithoutMerchandiseInput.schema';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemCreateNestedManyWithoutMerchandiseInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleitemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => saleitemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => saleitemWhereUniqueInputObjectSchema),
            z.lazy(() => saleitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleitemCreateNestedManyWithoutMerchandiseInputObjectSchema =
  Schema;
