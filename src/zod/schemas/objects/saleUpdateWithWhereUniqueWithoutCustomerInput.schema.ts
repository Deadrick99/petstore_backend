import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithoutCustomerInputObjectSchema } from './saleUpdateWithoutCustomerInput.schema';
import { saleUncheckedUpdateWithoutCustomerInputObjectSchema } from './saleUncheckedUpdateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => saleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saleUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => saleUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const saleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema = Schema;
