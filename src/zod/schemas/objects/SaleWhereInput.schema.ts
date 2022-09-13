import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { CustomerRelationFilterObjectSchema } from './CustomerRelationFilter.schema';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema';
import { SaleAnimalListRelationFilterObjectSchema } from './SaleAnimalListRelationFilter.schema';
import { SaleItemListRelationFilterObjectSchema } from './SaleItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SaleWhereInputObjectSchema),
        z.lazy(() => SaleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SaleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SaleWhereInputObjectSchema),
        z.lazy(() => SaleWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    SALEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    CUSTOMERID: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SALESTAX: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Customer: z
      .union([
        z.lazy(() => CustomerRelationFilterObjectSchema),
        z.lazy(() => CustomerWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Employee: z
      .union([
        z.lazy(() => EmployeeRelationFilterObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    SaleAnimal: z
      .lazy(() => SaleAnimalListRelationFilterObjectSchema)
      .optional(),
    SaleItem: z.lazy(() => SaleItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SaleWhereInputObjectSchema = Schema;
