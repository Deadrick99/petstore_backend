import { z } from 'zod';
import { SupplierCreateNestedOneWithoutAnimalOrderInputObjectSchema } from './SupplierCreateNestedOneWithoutAnimalOrderInput.schema';
import { AnimalOrderItemCreateNestedManyWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateNestedManyWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateWithoutEmployeeInput> = z
  .object({
    ORDERID: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    Supplier: z
      .lazy(() => SupplierCreateNestedOneWithoutAnimalOrderInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(
        () =>
          AnimalOrderItemCreateNestedManyWithoutAnimalOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderCreateWithoutEmployeeInputObjectSchema = Schema;
