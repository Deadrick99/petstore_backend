import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';
import { customerUpdateWithoutCityInputObjectSchema } from './customerUpdateWithoutCityInput.schema';
import { customerUncheckedUpdateWithoutCityInputObjectSchema } from './customerUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => customerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => customerUpdateWithoutCityInputObjectSchema),
        z.lazy(() => customerUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const customerUpdateWithWhereUniqueWithoutCityInputObjectSchema = Schema;
