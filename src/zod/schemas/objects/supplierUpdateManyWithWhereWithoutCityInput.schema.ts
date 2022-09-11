import { z } from 'zod';
import { supplierScalarWhereInputObjectSchema } from './supplierScalarWhereInput.schema';
import { supplierUpdateManyMutationInputObjectSchema } from './supplierUpdateManyMutationInput.schema';
import { supplierUncheckedUpdateManyWithoutSupplierInputObjectSchema } from './supplierUncheckedUpdateManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpdateManyWithWhereWithoutCityInput> = z
  .object({
    where: z.lazy(() => supplierScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => supplierUpdateManyMutationInputObjectSchema),
      z.lazy(() => supplierUncheckedUpdateManyWithoutSupplierInputObjectSchema),
    ]),
  })
  .strict();

export const supplierUpdateManyWithWhereWithoutCityInputObjectSchema = Schema;
