import { z } from 'zod';
import { animalorderitemUncheckedCreateNestedManyWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedCreateNestedManyWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUncheckedCreateWithoutSupplierInput> =
  z
    .object({
      ORDERID: z.number(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
      SHIPPINGCOST: z.number().optional().nullable(),
      EMPLOYEEID: z.number().optional().nullable(),
      animalorderitem: z
        .lazy(
          () =>
            animalorderitemUncheckedCreateNestedManyWithoutAnimalorderInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const animalorderUncheckedCreateWithoutSupplierInputObjectSchema =
  Schema;
