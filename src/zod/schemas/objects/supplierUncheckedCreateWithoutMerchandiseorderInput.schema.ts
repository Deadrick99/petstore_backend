import { z } from 'zod';
import { animalorderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema } from './animalorderUncheckedCreateNestedManyWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUncheckedCreateWithoutMerchandiseorderInput> =
  z
    .object({
      SUPPLIERID: z.number(),
      NAME: z.string().optional().nullable(),
      CONTACTNAME: z.string().optional().nullable(),
      PHONE: z.string().optional().nullable(),
      ADDRESS: z.string().optional().nullable(),
      ZIPCODE: z.string().optional().nullable(),
      CITYID: z.number().optional().nullable(),
      animalorder: z
        .lazy(
          () =>
            animalorderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema =
  Schema;
