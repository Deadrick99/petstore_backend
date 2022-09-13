import { z } from 'zod';
import { AnimalOrderCreateNestedManyWithoutSupplierInputObjectSchema } from './AnimalOrderCreateNestedManyWithoutSupplierInput.schema';
import { MerchandiseOrderCreateNestedManyWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateWithoutCityInput> = z
  .object({
    NAME: z.string().optional().nullable(),
    CONTACTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
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

export const SupplierCreateWithoutCityInputObjectSchema = Schema;
