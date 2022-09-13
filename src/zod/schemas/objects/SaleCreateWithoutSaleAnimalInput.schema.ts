import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutSaleInputObjectSchema } from './EmployeeCreateNestedOneWithoutSaleInput.schema';
import { CustomerCreateNestedOneWithoutSaleInputObjectSchema } from './CustomerCreateNestedOneWithoutSaleInput.schema';
import { SaleItemCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutSaleAnimalInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    Employee: z
      .lazy(() => EmployeeCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    Customer: z
      .lazy(() => CustomerCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleCreateWithoutSaleAnimalInputObjectSchema = Schema;
