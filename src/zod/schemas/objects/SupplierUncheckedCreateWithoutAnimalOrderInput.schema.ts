import { z } from 'zod';
import { MerchandiseOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutAnimalOrderInput> =
  z
    .object({
      SUPPLIERID: z.number(),
      NAME: z.string().optional().nullable(),
      CONTACTNAME: z.string().optional().nullable(),
      PHONE: z.string().optional().nullable(),
      ADDRESS: z.string().optional().nullable(),
      ZIPCODE: z.string().optional().nullable(),
      CITYID: z.number().optional().nullable(),
      MerchandiseOrder: z
        .lazy(
          () =>
            MerchandiseOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema =
  Schema;
