import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutSaleInputObjectSchema } from './EmployeeCreateNestedOneWithoutSaleInput.schema';
import { SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema } from './SaleAnimalCreateNestedManyWithoutSaleInput.schema';
import { SaleItemCreateNestedManyWithoutSaleInputObjectSchema } from './SaleItemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutCustomerInput> = z
  .object({
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    Employee: z
      .lazy(() => EmployeeCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleCreateWithoutCustomerInputObjectSchema = Schema;
