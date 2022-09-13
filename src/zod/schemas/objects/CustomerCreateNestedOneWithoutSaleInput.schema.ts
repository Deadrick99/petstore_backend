import { z } from 'zod';
import { CustomerCreateWithoutSaleInputObjectSchema } from './CustomerCreateWithoutSaleInput.schema';
import { CustomerUncheckedCreateWithoutSaleInputObjectSchema } from './CustomerUncheckedCreateWithoutSaleInput.schema';
import { CustomerCreateOrConnectWithoutSaleInputObjectSchema } from './CustomerCreateOrConnectWithoutSaleInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutSaleInput> =
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
        connect: z.lazy(() => CustomerWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CustomerCreateNestedOneWithoutSaleInputObjectSchema = Schema;
