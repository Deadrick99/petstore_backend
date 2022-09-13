import { z } from 'zod';
import { CityCreateNestedOneWithoutSupplierInputObjectSchema } from './CityCreateNestedOneWithoutSupplierInput.schema';
import { MerchandiseOrderCreateNestedManyWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateWithoutAnimalOrderInput> = z
  .object({
    SUPPLIERID: z.number(),
    NAME: z.string().optional().nullable(),
    CONTACTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    City: z
      .lazy(() => CityCreateNestedOneWithoutSupplierInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () => MerchandiseOrderCreateNestedManyWithoutSupplierInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SupplierCreateWithoutAnimalOrderInputObjectSchema = Schema;
