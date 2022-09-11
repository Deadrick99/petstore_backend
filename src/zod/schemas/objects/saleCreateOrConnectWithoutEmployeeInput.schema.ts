import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleCreateWithoutEmployeeInputObjectSchema } from './saleCreateWithoutEmployeeInput.schema';
import { saleUncheckedCreateWithoutEmployeeInputObjectSchema } from './saleUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateOrConnectWithoutEmployeeInput> = z
  .object({
    where: z.lazy(() => saleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleCreateWithoutEmployeeInputObjectSchema),
      z.lazy(() => saleUncheckedCreateWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const saleCreateOrConnectWithoutEmployeeInputObjectSchema = Schema;
