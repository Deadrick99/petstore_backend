import { z } from 'zod';
import { supplierCreateNestedOneWithoutAnimalorderInputObjectSchema } from './supplierCreateNestedOneWithoutAnimalorderInput.schema';
import { animalorderitemCreateNestedManyWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateNestedManyWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateWithoutEmployeeInput> = z
  .object({
    ORDERID: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    supplier: z
      .lazy(() => supplierCreateNestedOneWithoutAnimalorderInputObjectSchema)
      .optional(),
    animalorderitem: z
      .lazy(
        () =>
          animalorderitemCreateNestedManyWithoutAnimalorderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalorderCreateWithoutEmployeeInputObjectSchema = Schema;
