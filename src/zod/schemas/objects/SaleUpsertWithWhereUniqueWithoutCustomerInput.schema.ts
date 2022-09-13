import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutCustomerInputObjectSchema } from './SaleUpdateWithoutCustomerInput.schema';
import { SaleUncheckedUpdateWithoutCustomerInputObjectSchema } from './SaleUncheckedUpdateWithoutCustomerInput.schema';
import { SaleCreateWithoutCustomerInputObjectSchema } from './SaleCreateWithoutCustomerInput.schema';
import { SaleUncheckedCreateWithoutCustomerInputObjectSchema } from './SaleUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => SaleUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SaleCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const SaleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema = Schema;
