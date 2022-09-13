import { z } from 'zod';
import { AnimalOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedCreateNestedManyWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutCityInput> = z
  .object({
    SUPPLIERID: z.number(),
    NAME: z.string().optional().nullable(),
    CONTACTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    AnimalOrder: z
      .lazy(
        () =>
          AnimalOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema,
      )
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () =>
          MerchandiseOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SupplierUncheckedCreateWithoutCityInputObjectSchema = Schema;
