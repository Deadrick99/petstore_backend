import { z } from 'zod';
import { cityCreateWithoutCustomerInputObjectSchema } from './cityCreateWithoutCustomerInput.schema';
import { cityUncheckedCreateWithoutCustomerInputObjectSchema } from './cityUncheckedCreateWithoutCustomerInput.schema';
import { cityCreateOrConnectWithoutCustomerInputObjectSchema } from './cityCreateOrConnectWithoutCustomerInput.schema';
import { cityUpsertWithoutCustomerInputObjectSchema } from './cityUpsertWithoutCustomerInput.schema';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';
import { cityUpdateWithoutCustomerInputObjectSchema } from './cityUpdateWithoutCustomerInput.schema';
import { cityUncheckedUpdateWithoutCustomerInputObjectSchema } from './cityUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUpdateOneWithoutCustomerNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => cityCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => cityUncheckedCreateWithoutCustomerInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => cityCreateOrConnectWithoutCustomerInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => cityUpsertWithoutCustomerInputObjectSchema)
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
        connect: z.lazy(() => cityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => cityUpdateWithoutCustomerInputObjectSchema),
            z.lazy(() => cityUncheckedUpdateWithoutCustomerInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const cityUpdateOneWithoutCustomerNestedInputObjectSchema = Schema;
