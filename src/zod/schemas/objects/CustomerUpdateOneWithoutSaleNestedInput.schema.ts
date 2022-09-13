import { z } from 'zod';
import { CustomerCreateWithoutSaleInputObjectSchema } from './CustomerCreateWithoutSaleInput.schema';
import { CustomerUncheckedCreateWithoutSaleInputObjectSchema } from './CustomerUncheckedCreateWithoutSaleInput.schema';
import { CustomerCreateOrConnectWithoutSaleInputObjectSchema } from './CustomerCreateOrConnectWithoutSaleInput.schema';
import { CustomerUpsertWithoutSaleInputObjectSchema } from './CustomerUpsertWithoutSaleInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutSaleInputObjectSchema } from './CustomerUpdateWithoutSaleInput.schema';
import { CustomerUncheckedUpdateWithoutSaleInputObjectSchema } from './CustomerUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateOneWithoutSaleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CustomerCreateWithoutSaleInputObjectSchema),
            z.lazy(() => CustomerUncheckedCreateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CustomerCreateOrConnectWithoutSaleInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => CustomerUpsertWithoutSaleInputObjectSchema)
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
        connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CustomerUpdateWithoutSaleInputObjectSchema),
            z.lazy(() => CustomerUncheckedUpdateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CustomerUpdateOneWithoutSaleNestedInputObjectSchema = Schema;
