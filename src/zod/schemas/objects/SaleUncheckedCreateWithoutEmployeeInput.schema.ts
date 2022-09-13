import { z } from 'zod';
import { SaleAnimalUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedCreateNestedManyWithoutSaleInput.schema';
import { SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedCreateWithoutEmployeeInput> = z
  .object({
    SALEID: z.number().optional(),
    SALEDATE: z.date().optional().nullable(),
    CUSTOMERID: z.number().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    SaleAnimal: z
      .lazy(
        () => SaleAnimalUncheckedCreateNestedManyWithoutSaleInputObjectSchema,
      )
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemUncheckedCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUncheckedCreateWithoutEmployeeInputObjectSchema = Schema;
