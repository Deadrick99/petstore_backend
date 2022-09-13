import { z } from 'zod';
import { CityCreateWithoutCustomerInputObjectSchema } from './CityCreateWithoutCustomerInput.schema';
import { CityUncheckedCreateWithoutCustomerInputObjectSchema } from './CityUncheckedCreateWithoutCustomerInput.schema';
import { CityCreateOrConnectWithoutCustomerInputObjectSchema } from './CityCreateOrConnectWithoutCustomerInput.schema';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateNestedOneWithoutCustomerInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CityCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => CityUncheckedCreateWithoutCustomerInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CityCreateOrConnectWithoutCustomerInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CityWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CityCreateNestedOneWithoutCustomerInputObjectSchema = Schema;
