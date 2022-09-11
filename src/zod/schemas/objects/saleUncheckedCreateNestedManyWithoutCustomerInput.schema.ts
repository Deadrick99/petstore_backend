import { z } from 'zod';
import { saleCreateWithoutCustomerInputObjectSchema } from './saleCreateWithoutCustomerInput.schema';
import { saleUncheckedCreateWithoutCustomerInputObjectSchema } from './saleUncheckedCreateWithoutCustomerInput.schema';
import { saleCreateOrConnectWithoutCustomerInputObjectSchema } from './saleCreateOrConnectWithoutCustomerInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUncheckedCreateNestedManyWithoutCustomerInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => saleCreateWithoutCustomerInputObjectSchema).array(),
            z.lazy(() => saleUncheckedCreateWithoutCustomerInputObjectSchema),
            z
              .lazy(() => saleUncheckedCreateWithoutCustomerInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleCreateOrConnectWithoutCustomerInputObjectSchema),
            z
              .lazy(() => saleCreateOrConnectWithoutCustomerInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema =
  Schema;
