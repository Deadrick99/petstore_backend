import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityCreateWithoutCustomerInputObjectSchema } from './CityCreateWithoutCustomerInput.schema';
import { CityUncheckedCreateWithoutCustomerInputObjectSchema } from './CityUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => CityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CityCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const CityCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
