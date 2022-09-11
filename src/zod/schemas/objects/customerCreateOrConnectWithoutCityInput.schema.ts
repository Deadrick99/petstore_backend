import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';
import { customerCreateWithoutCityInputObjectSchema } from './customerCreateWithoutCityInput.schema';
import { customerUncheckedCreateWithoutCityInputObjectSchema } from './customerUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => customerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => customerCreateWithoutCityInputObjectSchema),
      z.lazy(() => customerUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const customerCreateOrConnectWithoutCityInputObjectSchema = Schema;
