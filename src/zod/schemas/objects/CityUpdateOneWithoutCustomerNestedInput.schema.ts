import { z } from 'zod';
import { CityCreateWithoutCustomerInputObjectSchema } from './CityCreateWithoutCustomerInput.schema';
import { CityUncheckedCreateWithoutCustomerInputObjectSchema } from './CityUncheckedCreateWithoutCustomerInput.schema';
import { CityCreateOrConnectWithoutCustomerInputObjectSchema } from './CityCreateOrConnectWithoutCustomerInput.schema';
import { CityUpsertWithoutCustomerInputObjectSchema } from './CityUpsertWithoutCustomerInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityUpdateWithoutCustomerInputObjectSchema } from './CityUpdateWithoutCustomerInput.schema';
import { CityUncheckedUpdateWithoutCustomerInputObjectSchema } from './CityUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpdateOneWithoutCustomerNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CityCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => CityUncheckedCreateWithoutCustomerInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CityCreateOrConnectWithoutCustomerInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => CityUpsertWithoutCustomerInputObjectSchema)
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
        connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CityUpdateWithoutCustomerInputObjectSchema),
            z.lazy(() => CityUncheckedUpdateWithoutCustomerInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CityUpdateOneWithoutCustomerNestedInputObjectSchema = Schema;
