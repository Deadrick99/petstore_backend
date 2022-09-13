import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutCityInputObjectSchema } from './CustomerCreateWithoutCityInput.schema';
import { CustomerUncheckedCreateWithoutCityInputObjectSchema } from './CustomerUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutCityInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerCreateOrConnectWithoutCityInputObjectSchema = Schema;
