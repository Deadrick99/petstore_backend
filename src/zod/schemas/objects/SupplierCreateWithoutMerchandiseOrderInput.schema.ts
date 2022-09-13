import { z } from 'zod';
import { CityCreateNestedOneWithoutSupplierInputObjectSchema } from './CityCreateNestedOneWithoutSupplierInput.schema';
import { AnimalOrderCreateNestedManyWithoutSupplierInputObjectSchema } from './AnimalOrderCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateWithoutMerchandiseOrderInput> = z
  .object({
    NAME: z.string().optional().nullable(),
    CONTACTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    City: z
      .lazy(() => CityCreateNestedOneWithoutSupplierInputObjectSchema)
      .optional(),
    AnimalOrder: z
      .lazy(() => AnimalOrderCreateNestedManyWithoutSupplierInputObjectSchema)
      .optional(),
  })
  .strict();

export const SupplierCreateWithoutMerchandiseOrderInputObjectSchema = Schema;
