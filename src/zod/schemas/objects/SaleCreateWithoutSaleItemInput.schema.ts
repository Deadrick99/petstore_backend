import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutSaleInputObjectSchema } from './EmployeeCreateNestedOneWithoutSaleInput.schema';
import { CustomerCreateNestedOneWithoutSaleInputObjectSchema } from './CustomerCreateNestedOneWithoutSaleInput.schema';
import { SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema } from './SaleAnimalCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateWithoutSaleItemInput> = z
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
    SaleAnimal: z
      .lazy(() => SaleAnimalCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleCreateWithoutSaleItemInputObjectSchema = Schema;
