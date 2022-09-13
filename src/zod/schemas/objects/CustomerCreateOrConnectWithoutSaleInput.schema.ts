import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutSaleInputObjectSchema } from './CustomerCreateWithoutSaleInput.schema';
import { CustomerUncheckedCreateWithoutSaleInputObjectSchema } from './CustomerUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CustomerCreateWithoutSaleInputObjectSchema),
      z.lazy(() => CustomerUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const CustomerCreateOrConnectWithoutSaleInputObjectSchema = Schema;
