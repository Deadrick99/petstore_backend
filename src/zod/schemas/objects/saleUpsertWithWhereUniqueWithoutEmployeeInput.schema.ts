import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithoutEmployeeInputObjectSchema } from './saleUpdateWithoutEmployeeInput.schema';
import { saleUncheckedUpdateWithoutEmployeeInputObjectSchema } from './saleUncheckedUpdateWithoutEmployeeInput.schema';
import { saleCreateWithoutEmployeeInputObjectSchema } from './saleCreateWithoutEmployeeInput.schema';
import { saleUncheckedCreateWithoutEmployeeInputObjectSchema } from './saleUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => saleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saleUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(() => saleUncheckedUpdateWithoutEmployeeInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => saleCreateWithoutEmployeeInputObjectSchema),
        z.lazy(() => saleUncheckedCreateWithoutEmployeeInputObjectSchema),
      ]),
    })
    .strict();

export const saleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema = Schema;
