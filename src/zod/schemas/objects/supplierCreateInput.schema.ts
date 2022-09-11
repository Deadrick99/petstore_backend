import { z } from 'zod';
import { cityCreateNestedOneWithoutSupplierInputObjectSchema } from './cityCreateNestedOneWithoutSupplierInput.schema';
import { animalorderCreateNestedManyWithoutSupplierInputObjectSchema } from './animalorderCreateNestedManyWithoutSupplierInput.schema';
import { merchandiseorderCreateNestedManyWithoutSupplierInputObjectSchema } from './merchandiseorderCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierCreateInput> = z
  .object({
    SUPPLIERID: z.number(),
    NAME: z.string().optional().nullable(),
    CONTACTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    city: z
      .lazy(() => cityCreateNestedOneWithoutSupplierInputObjectSchema)
      .optional(),
    animalorder: z
      .lazy(() => animalorderCreateNestedManyWithoutSupplierInputObjectSchema)
      .optional(),
    merchandiseorder: z
      .lazy(
        () => merchandiseorderCreateNestedManyWithoutSupplierInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const supplierCreateInputObjectSchema = Schema;
