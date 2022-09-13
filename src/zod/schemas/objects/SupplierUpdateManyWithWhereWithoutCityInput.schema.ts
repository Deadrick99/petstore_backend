import { z } from 'zod';
import { SupplierScalarWhereInputObjectSchema } from './SupplierScalarWhereInput.schema';
import { SupplierUpdateManyMutationInputObjectSchema } from './SupplierUpdateManyMutationInput.schema';
import { SupplierUncheckedUpdateManyWithoutSupplierInputObjectSchema } from './SupplierUncheckedUpdateManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateManyWithWhereWithoutCityInput> = z
  .object({
    where: z.lazy(() => SupplierScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SupplierUpdateManyMutationInputObjectSchema),
      z.lazy(() => SupplierUncheckedUpdateManyWithoutSupplierInputObjectSchema),
    ]),
  })
  .strict();

export const SupplierUpdateManyWithWhereWithoutCityInputObjectSchema = Schema;
