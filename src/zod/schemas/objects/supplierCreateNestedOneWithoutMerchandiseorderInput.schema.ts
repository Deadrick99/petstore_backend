import { z } from 'zod';
import { supplierCreateWithoutMerchandiseorderInputObjectSchema } from './supplierCreateWithoutMerchandiseorderInput.schema';
import { supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './supplierUncheckedCreateWithoutMerchandiseorderInput.schema';
import { supplierCreateOrConnectWithoutMerchandiseorderInputObjectSchema } from './supplierCreateOrConnectWithoutMerchandiseorderInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierCreateNestedOneWithoutMerchandiseorderInput> =
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
        connect: z.lazy(() => supplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const supplierCreateNestedOneWithoutMerchandiseorderInputObjectSchema =
  Schema;
