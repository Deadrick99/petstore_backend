import { z } from 'zod';
import { customerCreateWithoutSaleInputObjectSchema } from './customerCreateWithoutSaleInput.schema';
import { customerUncheckedCreateWithoutSaleInputObjectSchema } from './customerUncheckedCreateWithoutSaleInput.schema';
import { customerCreateOrConnectWithoutSaleInputObjectSchema } from './customerCreateOrConnectWithoutSaleInput.schema';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerCreateNestedOneWithoutSaleInput> =
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
        connect: z.lazy(() => customerWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const customerCreateNestedOneWithoutSaleInputObjectSchema = Schema;
