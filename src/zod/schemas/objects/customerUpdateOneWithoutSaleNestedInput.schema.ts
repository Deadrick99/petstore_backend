import { z } from 'zod';
import { customerCreateWithoutSaleInputObjectSchema } from './customerCreateWithoutSaleInput.schema';
import { customerUncheckedCreateWithoutSaleInputObjectSchema } from './customerUncheckedCreateWithoutSaleInput.schema';
import { customerCreateOrConnectWithoutSaleInputObjectSchema } from './customerCreateOrConnectWithoutSaleInput.schema';
import { customerUpsertWithoutSaleInputObjectSchema } from './customerUpsertWithoutSaleInput.schema';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';
import { customerUpdateWithoutSaleInputObjectSchema } from './customerUpdateWithoutSaleInput.schema';
import { customerUncheckedUpdateWithoutSaleInputObjectSchema } from './customerUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUpdateOneWithoutSaleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => customerCreateWithoutSaleInputObjectSchema),
            z.lazy(() => customerUncheckedCreateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => customerCreateOrConnectWithoutSaleInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => customerUpsertWithoutSaleInputObjectSchema)
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
        connect: z.lazy(() => customerWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => customerUpdateWithoutSaleInputObjectSchema),
            z.lazy(() => customerUncheckedUpdateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const customerUpdateOneWithoutSaleNestedInputObjectSchema = Schema;
