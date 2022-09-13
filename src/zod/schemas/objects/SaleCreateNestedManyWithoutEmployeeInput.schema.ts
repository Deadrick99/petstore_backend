import { z } from 'zod';
import { SaleCreateWithoutEmployeeInputObjectSchema } from './SaleCreateWithoutEmployeeInput.schema';
import { SaleUncheckedCreateWithoutEmployeeInputObjectSchema } from './SaleUncheckedCreateWithoutEmployeeInput.schema';
import { SaleCreateOrConnectWithoutEmployeeInputObjectSchema } from './SaleCreateOrConnectWithoutEmployeeInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateNestedManyWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleCreateWithoutEmployeeInputObjectSchema),
            z.lazy(() => SaleCreateWithoutEmployeeInputObjectSchema).array(),
            z.lazy(() => SaleUncheckedCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => SaleUncheckedCreateWithoutEmployeeInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleCreateOrConnectWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => SaleCreateOrConnectWithoutEmployeeInputObjectSchema)
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

export const SaleCreateNestedManyWithoutEmployeeInputObjectSchema = Schema;
