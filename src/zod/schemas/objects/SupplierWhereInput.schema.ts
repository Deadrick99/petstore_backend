import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { CityRelationFilterObjectSchema } from './CityRelationFilter.schema';
import { CityWhereInputObjectSchema } from './CityWhereInput.schema';
import { AnimalOrderListRelationFilterObjectSchema } from './AnimalOrderListRelationFilter.schema';
import { MerchandiseOrderListRelationFilterObjectSchema } from './MerchandiseOrderListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SupplierWhereInputObjectSchema),
        z.lazy(() => SupplierWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SupplierWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SupplierWhereInputObjectSchema),
        z.lazy(() => SupplierWhereInputObjectSchema).array(),
      ])
      .optional(),
    SUPPLIERID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    NAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    CONTACTNAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    PHONE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ADDRESS: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ZIPCODE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    CITYID: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    City: z
      .union([
        z.lazy(() => CityRelationFilterObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    AnimalOrder: z
      .lazy(() => AnimalOrderListRelationFilterObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(() => MerchandiseOrderListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const SupplierWhereInputObjectSchema = Schema;
