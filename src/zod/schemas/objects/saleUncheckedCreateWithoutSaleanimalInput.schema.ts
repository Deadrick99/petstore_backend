import { z } from 'zod';
import { saleitemUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './saleitemUncheckedCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUncheckedCreateWithoutSaleanimalInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    EMPLOYEEID: z.number().optional().nullable(),
    CUSTOMERID: z.number().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    saleitem: z
      .lazy(() => saleitemUncheckedCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleUncheckedCreateWithoutSaleanimalInputObjectSchema = Schema;
