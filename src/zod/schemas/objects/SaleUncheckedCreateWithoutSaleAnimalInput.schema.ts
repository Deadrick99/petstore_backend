import { z } from 'zod';
import { SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateWithoutSaleAnimalInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    EMPLOYEEID: z.number().optional().nullable(),
    CUSTOMERID: z.number().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    SaleItem: z
      .lazy(() => SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema = Schema;
