import { z } from 'zod';
import { cityWhereUniqueInputObjectSchema } from './cityWhereUniqueInput.schema';
import { cityCreateWithoutSupplierInputObjectSchema } from './cityCreateWithoutSupplierInput.schema';
import { cityUncheckedCreateWithoutSupplierInputObjectSchema } from './cityUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateOrConnectWithoutSupplierInput> = z
  .object({
    where: z.lazy(() => cityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => cityCreateWithoutSupplierInputObjectSchema),
      z.lazy(() => cityUncheckedCreateWithoutSupplierInputObjectSchema),
    ]),
  })
  .strict();

export const cityCreateOrConnectWithoutSupplierInputObjectSchema = Schema;
