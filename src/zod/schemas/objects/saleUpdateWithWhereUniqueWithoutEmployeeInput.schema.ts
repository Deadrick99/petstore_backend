import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithoutEmployeeInputObjectSchema } from './saleUpdateWithoutEmployeeInput.schema';
import { saleUncheckedUpdateWithoutEmployeeInputObjectSchema } from './saleUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => saleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saleUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(() => saleUncheckedUpdateWithoutEmployeeInputObjectSchema),
      ]),
    })
    .strict();

export const saleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema = Schema;
