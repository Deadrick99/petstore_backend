import { z } from 'zod';
import { supplierCreateWithoutMerchandiseorderInputObjectSchema } from './supplierCreateWithoutMerchandiseorderInput.schema';
import { supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './supplierUncheckedCreateWithoutMerchandiseorderInput.schema';
import { supplierCreateOrConnectWithoutMerchandiseorderInputObjectSchema } from './supplierCreateOrConnectWithoutMerchandiseorderInput.schema';
import { supplierUpsertWithoutMerchandiseorderInputObjectSchema } from './supplierUpsertWithoutMerchandiseorderInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierUpdateWithoutMerchandiseorderInputObjectSchema } from './supplierUpdateWithoutMerchandiseorderInput.schema';
import { supplierUncheckedUpdateWithoutMerchandiseorderInputObjectSchema } from './supplierUncheckedUpdateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpdateOneWithoutMerchandiseorderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => supplierCreateWithoutMerchandiseorderInputObjectSchema,
            ),
            z.lazy(
              () =>
                supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
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
              supplierCreateOrConnectWithoutMerchandiseorderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => supplierUpsertWithoutMerchandiseorderInputObjectSchema)
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
        connect: z.lazy(() => supplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => supplierUpdateWithoutMerchandiseorderInputObjectSchema,
            ),
            z.lazy(
              () =>
                supplierUncheckedUpdateWithoutMerchandiseorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const supplierUpdateOneWithoutMerchandiseorderNestedInputObjectSchema =
  Schema;
