import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutCustomerInputObjectSchema } from './SaleCreateWithoutCustomerInput.schema';
import { SaleUncheckedCreateWithoutCustomerInputObjectSchema } from './SaleUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutCustomerInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutCustomerInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutCustomerInputObjectSchema = Schema;
