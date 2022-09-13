import { z } from 'zod';
import { CustomerCreateNestedOneWithoutSaleInputObjectSchema } from './CustomerCreateNestedOneWithoutSaleInput.schema';
import { SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema } from './SaleAnimalCreateNestedManyWithoutSaleInput.schema';
import { SaleItemCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutEmployeeInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    Customer: z
      .lazy(() => CustomerCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleCreateWithoutEmployeeInputObjectSchema = Schema;
