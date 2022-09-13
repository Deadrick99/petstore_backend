import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutEmployeeInputObjectSchema } from './SaleCreateWithoutEmployeeInput.schema';
import { SaleUncheckedCreateWithoutEmployeeInputObjectSchema } from './SaleUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutEmployeeInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutEmployeeInputObjectSchema = Schema;
