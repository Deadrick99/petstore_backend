import { z } from 'zod';
import { SaleCreateWithoutCustomerInputObjectSchema } from './SaleCreateWithoutCustomerInput.schema';
import { SaleUncheckedCreateWithoutCustomerInputObjectSchema } from './SaleUncheckedCreateWithoutCustomerInput.schema';
import { SaleCreateOrConnectWithoutCustomerInputObjectSchema } from './SaleCreateOrConnectWithoutCustomerInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateNestedManyWithoutCustomerInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => SaleCreateWithoutCustomerInputObjectSchema).array(),
            z.lazy(() => SaleUncheckedCreateWithoutCustomerInputObjectSchema),
            z
              .lazy(() => SaleUncheckedCreateWithoutCustomerInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleCreateOrConnectWithoutCustomerInputObjectSchema),
            z
              .lazy(() => SaleCreateOrConnectWithoutCustomerInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleCreateNestedManyWithoutCustomerInputObjectSchema = Schema;
