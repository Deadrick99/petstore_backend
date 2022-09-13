import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutEmployeeInputObjectSchema } from './SaleUpdateWithoutEmployeeInput.schema';
import { SaleUncheckedUpdateWithoutEmployeeInputObjectSchema } from './SaleUncheckedUpdateWithoutEmployeeInput.schema';
import { SaleCreateWithoutEmployeeInputObjectSchema } from './SaleCreateWithoutEmployeeInput.schema';
import { SaleUncheckedCreateWithoutEmployeeInputObjectSchema } from './SaleUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(() => SaleUncheckedUpdateWithoutEmployeeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SaleCreateWithoutEmployeeInputObjectSchema),
        z.lazy(() => SaleUncheckedCreateWithoutEmployeeInputObjectSchema),
      ]),
    })
    .strict();

export const SaleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema = Schema;
