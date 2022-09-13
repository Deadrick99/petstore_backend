import { z } from 'zod';
import { CityWhereUniqueInputObjectSchema } from './CityWhereUniqueInput.schema';
import { CityCreateWithoutSupplierInputObjectSchema } from './CityCreateWithoutSupplierInput.schema';
import { CityUncheckedCreateWithoutSupplierInputObjectSchema } from './CityUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateOrConnectWithoutSupplierInput> = z
  .object({
    where: z.lazy(() => CityWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CityCreateWithoutSupplierInputObjectSchema),
      z.lazy(() => CityUncheckedCreateWithoutSupplierInputObjectSchema),
    ]),
  })
  .strict();

export const CityCreateOrConnectWithoutSupplierInputObjectSchema = Schema;
