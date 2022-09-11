import { z } from 'zod';
import { employeeCreateNestedOneWithoutSaleInputObjectSchema } from './employeeCreateNestedOneWithoutSaleInput.schema';
import { customerCreateNestedOneWithoutSaleInputObjectSchema } from './customerCreateNestedOneWithoutSaleInput.schema';
import { saleanimalCreateNestedManyWithoutSaleInputObjectSchema } from './saleanimalCreateNestedManyWithoutSaleInput.schema';
import { saleitemCreateNestedManyWithoutSaleInputObjectSchema } from './saleitemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateInput> = z
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
    saleitem: z
      .lazy(() => saleitemCreateNestedManyWithoutSaleInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleCreateInputObjectSchema = Schema;
