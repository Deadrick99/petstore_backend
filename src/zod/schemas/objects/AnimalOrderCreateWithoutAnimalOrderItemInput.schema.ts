import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateNestedOneWithoutAnimalOrderInput.schema';
import { SupplierCreateNestedOneWithoutAnimalOrderInputObjectSchema } from './SupplierCreateNestedOneWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateWithoutAnimalOrderItemInput> = z
  .object({
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    Employee: z
      .lazy(() => EmployeeCreateNestedOneWithoutAnimalOrderInputObjectSchema)
      .optional(),
    Supplier: z
      .lazy(() => SupplierCreateNestedOneWithoutAnimalOrderInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema = Schema;
