import { z } from 'zod';
import { SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema';
import { SaleItemUpdateManyMutationInputObjectSchema } from './SaleItemUpdateManyMutationInput.schema';
import { SaleItemUncheckedUpdateManyWithoutSaleItemInputObjectSchema } from './SaleItemUncheckedUpdateManyWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateManyWithWhereWithoutSaleInput> = z
  .object({
    where: z.lazy(() => SaleItemScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => SaleItemUpdateManyMutationInputObjectSchema),
      z.lazy(() => SaleItemUncheckedUpdateManyWithoutSaleItemInputObjectSchema),
    ]),
  })
  .strict();

export const SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema = Schema;
