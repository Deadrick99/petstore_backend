import { z } from 'zod';
import { CityCreateWithoutEmployeeInputObjectSchema } from './CityCreateWithoutEmployeeInput.schema';
import { CityUncheckedCreateWithoutEmployeeInputObjectSchema } from './CityUncheckedCreateWithoutEmployeeInput.schema';
import { CityCreateOrConnectWithoutEmployeeInputObjectSchema } from './CityCreateOrConnectWithoutEmployeeInput.schema';
import { CityUpsertWithoutEmployeeInputObjectSchema } from './CityUpsertWithoutEmployeeInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityUpdateWithoutEmployeeInputObjectSchema } from './CityUpdateWithoutEmployeeInput.schema';
import { CityUncheckedUpdateWithoutEmployeeInputObjectSchema } from './CityUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUpdateOneWithoutEmployeeNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CityCreateWithoutEmployeeInputObjectSchema),
            z.lazy(() => CityUncheckedCreateWithoutEmployeeInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CityCreateOrConnectWithoutEmployeeInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => CityUpsertWithoutEmployeeInputObjectSchema)
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
        connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CityUpdateWithoutEmployeeInputObjectSchema),
            z.lazy(() => CityUncheckedUpdateWithoutEmployeeInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CityUpdateOneWithoutEmployeeNestedInputObjectSchema = Schema;
