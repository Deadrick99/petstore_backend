import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutEmployeeInputObjectSchema } from './SaleUpdateWithoutEmployeeInput.schema';
import { SaleUncheckedUpdateWithoutEmployeeInputObjectSchema } from './SaleUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(() => SaleUncheckedUpdateWithoutEmployeeInputObjectSchema),
      ]),
    })
    .strict();

export const SaleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema = Schema;
