import { z } from 'zod';
import { employeeCreateNestedOneWithoutSaleInputObjectSchema } from './employeeCreateNestedOneWithoutSaleInput.schema';
import { customerCreateNestedOneWithoutSaleInputObjectSchema } from './customerCreateNestedOneWithoutSaleInput.schema';
import { saleanimalCreateNestedManyWithoutSaleInputObjectSchema } from './saleanimalCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateWithoutSaleitemInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
    employee: z
      .lazy(() => employeeCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    customer: z
      .lazy(() => customerCreateNestedOneWithoutSaleInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleCreateWithoutSaleitemInputObjectSchema = Schema;
