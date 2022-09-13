import { z } from 'zod';
import { CustomerCreateNestedOneWithoutSaleInputObjectSchema } from './CustomerCreateNestedOneWithoutSaleInput.schema';
import { EmployeeCreateNestedOneWithoutSaleInputObjectSchema } from './EmployeeCreateNestedOneWithoutSaleInput.schema';
import { SaleItemCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutSaleAnimalInput> = z
  .object({
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    Customer: z
      .lazy(() => CustomerCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    Employee: z
      .lazy(() => EmployeeCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleCreateWithoutSaleAnimalInputObjectSchema = Schema;
