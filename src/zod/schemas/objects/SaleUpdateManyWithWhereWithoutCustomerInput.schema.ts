import { z } from 'zod';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';
import { SaleUpdateManyMutationInputObjectSchema } from './SaleUpdateManyMutationInput.schema';
import { SaleUncheckedUpdateManyWithoutSaleInputObjectSchema } from './SaleUncheckedUpdateManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateManyWithWhereWithoutCustomerInput> = z
  .object({
    where: z.lazy(() => SaleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleUpdateManyMutationInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateManyWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpdateManyWithWhereWithoutCustomerInputObjectSchema = Schema;
