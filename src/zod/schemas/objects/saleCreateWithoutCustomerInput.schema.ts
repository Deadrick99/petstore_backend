import { z } from 'zod';
import { employeeCreateNestedOneWithoutSaleInputObjectSchema } from './employeeCreateNestedOneWithoutSaleInput.schema';
import { saleanimalCreateNestedManyWithoutSaleInputObjectSchema } from './saleanimalCreateNestedManyWithoutSaleInput.schema';
import { saleitemCreateNestedManyWithoutSaleInputObjectSchema } from './saleitemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateWithoutCustomerInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    employee: z
      .lazy(() => employeeCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleCreateWithoutCustomerInputObjectSchema = Schema;
