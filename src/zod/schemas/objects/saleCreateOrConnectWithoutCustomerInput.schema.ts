import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleCreateWithoutCustomerInputObjectSchema } from './saleCreateWithoutCustomerInput.schema';
import { saleUncheckedCreateWithoutCustomerInputObjectSchema } from './saleUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => saleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => saleUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const saleCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
