import { z } from 'zod';
import { supplierCreateNestedOneWithoutAnimalorderInputObjectSchema } from './supplierCreateNestedOneWithoutAnimalorderInput.schema';
import { employeeCreateNestedOneWithoutAnimalorderInputObjectSchema } from './employeeCreateNestedOneWithoutAnimalorderInput.schema';
import { animalorderitemCreateNestedManyWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateNestedManyWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateInput> = z
  .object({
    ORDERID: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    supplier: z
      .lazy(() => supplierCreateNestedOneWithoutAnimalorderInputObjectSchema)
      .optional(),
    employee: z
      .lazy(() => employeeCreateNestedOneWithoutAnimalorderInputObjectSchema)
      .optional(),
    animalorderitem: z
      .lazy(
        () =>
          animalorderitemCreateNestedManyWithoutAnimalorderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalorderCreateInputObjectSchema = Schema;
