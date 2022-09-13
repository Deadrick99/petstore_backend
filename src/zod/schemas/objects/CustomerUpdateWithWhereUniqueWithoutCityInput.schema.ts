import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutCityInputObjectSchema } from './CustomerUpdateWithoutCityInput.schema';
import { CustomerUncheckedUpdateWithoutCityInputObjectSchema } from './CustomerUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CustomerUpdateWithoutCityInputObjectSchema),
        z.lazy(() => CustomerUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const CustomerUpdateWithWhereUniqueWithoutCityInputObjectSchema = Schema;
