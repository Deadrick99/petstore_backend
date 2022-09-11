import { z } from 'zod';
import { cityCreateWithoutEmployeeInputObjectSchema } from './cityCreateWithoutEmployeeInput.schema';
import { cityUncheckedCreateWithoutEmployeeInputObjectSchema } from './cityUncheckedCreateWithoutEmployeeInput.schema';
import { cityCreateOrConnectWithoutEmployeeInputObjectSchema } from './cityCreateOrConnectWithoutEmployeeInput.schema';
import { cityUpsertWithoutEmployeeInputObjectSchema } from './cityUpsertWithoutEmployeeInput.schema';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';
import { cityUpdateWithoutEmployeeInputObjectSchema } from './cityUpdateWithoutEmployeeInput.schema';
import { cityUncheckedUpdateWithoutEmployeeInputObjectSchema } from './cityUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUpdateOneWithoutEmployeeNestedInput> =
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
        upsert: z
          .lazy(() => cityUpsertWithoutEmployeeInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => cityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => cityUpdateWithoutEmployeeInputObjectSchema),
            z.lazy(() => cityUncheckedUpdateWithoutEmployeeInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const cityUpdateOneWithoutEmployeeNestedInputObjectSchema = Schema;
