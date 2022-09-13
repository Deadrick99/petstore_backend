import { z } from 'zod';
import { SaleAnimalCreateWithoutSaleInputObjectSchema } from './SaleAnimalCreateWithoutSaleInput.schema';
import { SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutSaleInput.schema';
import { SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema } from './SaleAnimalCreateOrConnectWithoutSaleInput.schema';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateNestedManyWithoutSaleInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleAnimalCreateWithoutSaleInputObjectSchema),
            z.lazy(() => SaleAnimalCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema = Schema;
