import { z } from 'zod';
import { AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUncheckedCreateWithoutEmployeeInput> =
  z
    .object({
      ORDERID: z.number(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
      SUPPLIERID: z.number().optional().nullable(),
      SHIPPINGCOST: z.number().optional().nullable(),
      AnimalOrderItem: z
        .lazy(
          () =>
            AnimalOrderItemUncheckedCreateNestedManyWithoutAnimalOrderInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema =
  Schema;
