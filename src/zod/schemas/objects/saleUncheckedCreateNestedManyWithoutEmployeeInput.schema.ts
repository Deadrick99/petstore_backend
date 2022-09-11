import { z } from 'zod';
import { saleCreateWithoutEmployeeInputObjectSchema } from './saleCreateWithoutEmployeeInput.schema';
import { saleUncheckedCreateWithoutEmployeeInputObjectSchema } from './saleUncheckedCreateWithoutEmployeeInput.schema';
import { saleCreateOrConnectWithoutEmployeeInputObjectSchema } from './saleCreateOrConnectWithoutEmployeeInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUncheckedCreateNestedManyWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleCreateWithoutEmployeeInputObjectSchema),
            z.lazy(() => saleCreateWithoutEmployeeInputObjectSchema).array(),
            z.lazy(() => saleUncheckedCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => saleUncheckedCreateWithoutEmployeeInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleCreateOrConnectWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => saleCreateOrConnectWithoutEmployeeInputObjectSchema)
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

export const saleUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema =
  Schema;
