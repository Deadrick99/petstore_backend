import { z } from 'zod';
import { saleanimalUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './saleanimalUncheckedCreateNestedManyWithoutSaleInput.schema';
import { saleitemUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './saleitemUncheckedCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUncheckedCreateInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    EMPLOYEEID: z.number().optional().nullable(),
    CUSTOMERID: z.number().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    saleanimal: z
      .lazy(
        () => saleanimalUncheckedCreateNestedManyWithoutSaleInputObjectSchema,
      )
      .optional(),
    saleitem: z
      .lazy(() => saleitemUncheckedCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleUncheckedCreateInputObjectSchema = Schema;
