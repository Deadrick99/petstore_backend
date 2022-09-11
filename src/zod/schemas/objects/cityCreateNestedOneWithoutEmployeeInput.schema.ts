import { z } from 'zod';
import { cityCreateWithoutEmployeeInputObjectSchema } from './cityCreateWithoutEmployeeInput.schema';
import { cityUncheckedCreateWithoutEmployeeInputObjectSchema } from './cityUncheckedCreateWithoutEmployeeInput.schema';
import { cityCreateOrConnectWithoutEmployeeInputObjectSchema } from './cityCreateOrConnectWithoutEmployeeInput.schema';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateNestedOneWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => cityCreateWithoutEmployeeInputObjectSchema),
            z.lazy(() => cityUncheckedCreateWithoutEmployeeInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => cityCreateOrConnectWithoutEmployeeInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => cityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const cityCreateNestedOneWithoutEmployeeInputObjectSchema = Schema;
