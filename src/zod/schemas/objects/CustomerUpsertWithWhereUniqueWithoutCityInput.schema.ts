import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutCityInputObjectSchema } from './CustomerUpdateWithoutCityInput.schema';
import { CustomerUncheckedUpdateWithoutCityInputObjectSchema } from './CustomerUncheckedUpdateWithoutCityInput.schema';
import { CustomerCreateWithoutCityInputObjectSchema } from './CustomerCreateWithoutCityInput.schema';
import { CustomerUncheckedCreateWithoutCityInputObjectSchema } from './CustomerUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CustomerUpdateWithoutCityInputObjectSchema),
        z.lazy(() => CustomerUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CustomerCreateWithoutCityInputObjectSchema),
        z.lazy(() => CustomerUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const CustomerUpsertWithWhereUniqueWithoutCityInputObjectSchema = Schema;
