import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithoutCustomerInputObjectSchema } from './saleUpdateWithoutCustomerInput.schema';
import { saleUncheckedUpdateWithoutCustomerInputObjectSchema } from './saleUncheckedUpdateWithoutCustomerInput.schema';
import { saleCreateWithoutCustomerInputObjectSchema } from './saleCreateWithoutCustomerInput.schema';
import { saleUncheckedCreateWithoutCustomerInputObjectSchema } from './saleUncheckedCreateWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpsertWithWhereUniqueWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => saleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saleUpdateWithoutCustomerInputObjectSchema),
        z.lazy(() => saleUncheckedUpdateWithoutCustomerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => saleCreateWithoutCustomerInputObjectSchema),
        z.lazy(() => saleUncheckedCreateWithoutCustomerInputObjectSchema),
      ]),
    })
    .strict();

export const saleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema = Schema;
