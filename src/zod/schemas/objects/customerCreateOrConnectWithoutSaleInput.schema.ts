import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';
import { customerCreateWithoutSaleInputObjectSchema } from './customerCreateWithoutSaleInput.schema';
import { customerUncheckedCreateWithoutSaleInputObjectSchema } from './customerUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => customerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => customerCreateWithoutSaleInputObjectSchema),
      z.lazy(() => customerUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const customerCreateOrConnectWithoutSaleInputObjectSchema = Schema;
