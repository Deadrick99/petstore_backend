import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema';
import { SupplierRelationFilterObjectSchema } from './SupplierRelationFilter.schema';
import { SupplierWhereInputObjectSchema } from './SupplierWhereInput.schema';
import { AnimalOrderItemListRelationFilterObjectSchema } from './AnimalOrderItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnimalOrderWhereInputObjectSchema),
        z.lazy(() => AnimalOrderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnimalOrderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnimalOrderWhereInputObjectSchema),
        z.lazy(() => AnimalOrderWhereInputObjectSchema).array(),
      ])
      .optional(),
    ORDERID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ORDERDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    RECEIVEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    SUPPLIERID: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SHIPPINGCOST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Employee: z
      .union([
        z.lazy(() => EmployeeRelationFilterObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Supplier: z
      .union([
        z.lazy(() => SupplierRelationFilterObjectSchema),
        z.lazy(() => SupplierWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    AnimalOrderItem: z
      .lazy(() => AnimalOrderItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderWhereInputObjectSchema = Schema;
