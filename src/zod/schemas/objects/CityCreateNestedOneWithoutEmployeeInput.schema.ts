import { z } from 'zod';
import { CityCreateWithoutEmployeeInputObjectSchema } from './CityCreateWithoutEmployeeInput.schema';
import { CityUncheckedCreateWithoutEmployeeInputObjectSchema } from './CityUncheckedCreateWithoutEmployeeInput.schema';
import { CityCreateOrConnectWithoutEmployeeInputObjectSchema } from './CityCreateOrConnectWithoutEmployeeInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateNestedOneWithoutEmployeeInput> =
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
        connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CityCreateNestedOneWithoutEmployeeInputObjectSchema = Schema;
