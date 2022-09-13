import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUncheckedCreateWithoutAnimalOrderItemInput> =
  z
    .object({
      ORDERID: z.number().optional(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
      SUPPLIERID: z.number().optional().nullable(),
      SHIPPINGCOST: z.number().optional().nullable(),
      EMPLOYEEID: z.number().optional().nullable(),
    })
    .strict();

export const AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema =
  Schema;
