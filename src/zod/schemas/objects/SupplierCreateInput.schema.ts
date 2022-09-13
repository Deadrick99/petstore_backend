import { z } from 'zod';
import { CityCreateNestedOneWithoutSupplierInputObjectSchema } from './CityCreateNestedOneWithoutSupplierInput.schema';
import { AnimalOrderCreateNestedManyWithoutSupplierInputObjectSchema } from './AnimalOrderCreateNestedManyWithoutSupplierInput.schema';
import { MerchandiseOrderCreateNestedManyWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateInput> = z
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
    MerchandiseOrder: z
      .lazy(
        () => MerchandiseOrderCreateNestedManyWithoutSupplierInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SupplierCreateInputObjectSchema = Schema;
