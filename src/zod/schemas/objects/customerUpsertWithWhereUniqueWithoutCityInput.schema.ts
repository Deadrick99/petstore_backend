import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';
import { customerUpdateWithoutCityInputObjectSchema } from './customerUpdateWithoutCityInput.schema';
import { customerUncheckedUpdateWithoutCityInputObjectSchema } from './customerUncheckedUpdateWithoutCityInput.schema';
import { customerCreateWithoutCityInputObjectSchema } from './customerCreateWithoutCityInput.schema';
import { customerUncheckedCreateWithoutCityInputObjectSchema } from './customerUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => customerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => customerUpdateWithoutCityInputObjectSchema),
        z.lazy(() => customerUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => customerCreateWithoutCityInputObjectSchema),
        z.lazy(() => customerUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const customerUpsertWithWhereUniqueWithoutCityInputObjectSchema = Schema;
