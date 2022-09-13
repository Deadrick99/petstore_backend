import { z } from 'zod';
import { CityCreateWithoutSupplierInputObjectSchema } from './CityCreateWithoutSupplierInput.schema';
import { CityUncheckedCreateWithoutSupplierInputObjectSchema } from './CityUncheckedCreateWithoutSupplierInput.schema';
import { CityCreateOrConnectWithoutSupplierInputObjectSchema } from './CityCreateOrConnectWithoutSupplierInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateNestedOneWithoutSupplierInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CityCreateWithoutSupplierInputObjectSchema),
            z.lazy(() => CityUncheckedCreateWithoutSupplierInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CityCreateOrConnectWithoutSupplierInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CityCreateNestedOneWithoutSupplierInputObjectSchema = Schema;
