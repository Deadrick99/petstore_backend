import { z } from 'zod';
import { customerCreateNestedOneWithoutSaleInputObjectSchema } from './customerCreateNestedOneWithoutSaleInput.schema';
import { saleanimalCreateNestedManyWithoutSaleInputObjectSchema } from './saleanimalCreateNestedManyWithoutSaleInput.schema';
import { saleitemCreateNestedManyWithoutSaleInputObjectSchema } from './saleitemCreateNestedManyWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateWithoutEmployeeInput> = z
  .object({
    SALEID: z.number(),
    SALEDATE: z.date().optional().nullable(),
    SALESTAX: z.number().optional().nullable(),
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

export const saleCreateWithoutEmployeeInputObjectSchema = Schema;
