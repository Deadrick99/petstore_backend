import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateNestedOneWithoutAnimalOrderInput.schema';
import { AnimalOrderItemCreateNestedManyWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateNestedManyWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateWithoutSupplierInput> = z
  .object({
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    Employee: z
      .lazy(() => EmployeeCreateNestedOneWithoutAnimalOrderInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(
        () =>
          AnimalOrderItemCreateNestedManyWithoutAnimalOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderCreateWithoutSupplierInputObjectSchema = Schema;
