import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { CityRelationFilterObjectSchema } from './CityRelationFilter.schema';
import { cityWhereInputObjectSchema } from './cityWhereInput.schema';
import { AnimalorderListRelationFilterObjectSchema } from './AnimalorderListRelationFilter.schema';
import { MerchandiseorderListRelationFilterObjectSchema } from './MerchandiseorderListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => supplierWhereInputObjectSchema),
        z.lazy(() => supplierWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => supplierWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => supplierWhereInputObjectSchema),
        z.lazy(() => supplierWhereInputObjectSchema).array(),
      ])
      .optional(),
    SUPPLIERID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
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
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    city: z
      .union([
        z.lazy(() => CityRelationFilterObjectSchema),
        z.lazy(() => cityWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animalorder: z
      .lazy(() => AnimalorderListRelationFilterObjectSchema)
      .optional(),
    merchandiseorder: z
      .lazy(() => MerchandiseorderListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const supplierWhereInputObjectSchema = Schema;
