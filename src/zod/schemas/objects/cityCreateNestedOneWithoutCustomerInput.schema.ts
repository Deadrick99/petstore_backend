import { z } from 'zod';
import { cityCreateWithoutCustomerInputObjectSchema } from './cityCreateWithoutCustomerInput.schema';
import { cityUncheckedCreateWithoutCustomerInputObjectSchema } from './cityUncheckedCreateWithoutCustomerInput.schema';
import { cityCreateOrConnectWithoutCustomerInputObjectSchema } from './cityCreateOrConnectWithoutCustomerInput.schema';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateNestedOneWithoutCustomerInput> =
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
        connect: z.lazy(() => cityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const cityCreateNestedOneWithoutCustomerInputObjectSchema = Schema;
