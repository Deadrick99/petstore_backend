import { z } from 'zod';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';
import { cityCreateWithoutCustomerInputObjectSchema } from './cityCreateWithoutCustomerInput.schema';
import { cityUncheckedCreateWithoutCustomerInputObjectSchema } from './cityUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => cityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => cityCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => cityUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const cityCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
