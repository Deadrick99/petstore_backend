import { z } from 'zod';
import { SaleAnimalUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateWithoutSaleItemInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    EMPLOYEEID: z.number().optional().nullable(),
    CUSTOMERID: z.number().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    SaleAnimal: z
      .lazy(
        () => SaleAnimalUncheckedCreateNestedManyWithoutSaleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SaleUncheckedCreateWithoutSaleItemInputObjectSchema = Schema;
