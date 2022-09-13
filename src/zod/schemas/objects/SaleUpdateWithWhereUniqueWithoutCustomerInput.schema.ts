import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutCustomerInputObjectSchema } from './SaleUpdateWithoutCustomerInput.schema';
import { SaleUncheckedUpdateWithoutCustomerInputObjectSchema } from './SaleUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => SaleUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const SaleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema = Schema;
