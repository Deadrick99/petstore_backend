import { z } from 'zod';
import { AnimalOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutMerchandiseOrderInput> =
  z
    .object({
      SUPPLIERID: z.number().optional(),
      NAME: z.string().optional().nullable(),
      CONTACTNAME: z.string().optional().nullable(),
      PHONE: z.string().optional().nullable(),
      ADDRESS: z.string().optional().nullable(),
      ZIPCODE: z.string().optional().nullable(),
      CITYID: z.number().optional().nullable(),
      AnimalOrder: z
        .lazy(
          () =>
            AnimalOrderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema =
  Schema;
