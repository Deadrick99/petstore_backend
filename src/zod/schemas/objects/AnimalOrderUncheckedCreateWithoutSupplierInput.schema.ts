import { z } from 'zod';
import { AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUncheckedCreateWithoutSupplierInput> =
  z
    .object({
      ORDERID: z.number().optional(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
      SHIPPINGCOST: z.number().optional().nullable(),
      EMPLOYEEID: z.number().optional().nullable(),
      AnimalOrderItem: z
        .lazy(
          () =>
            AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema =
  Schema;
