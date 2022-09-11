import { z } from 'zod';
import { saleanimalCreateWithoutSaleInputObjectSchema } from './saleanimalCreateWithoutSaleInput.schema';
import { saleanimalUncheckedCreateWithoutSaleInputObjectSchema } from './saleanimalUncheckedCreateWithoutSaleInput.schema';
import { saleanimalCreateOrConnectWithoutSaleInputObjectSchema } from './saleanimalCreateOrConnectWithoutSaleInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateNestedManyWithoutSaleInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleanimalCreateWithoutSaleInputObjectSchema),
            z.lazy(() => saleanimalCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => saleanimalUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleanimalUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleanimalCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleanimalCreateOrConnectWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleanimalCreateNestedManyWithoutSaleInputObjectSchema = Schema;
