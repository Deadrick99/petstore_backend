import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithoutSupplierInputObjectSchema } from './merchandiseorderUpdateWithoutSupplierInput.schema';
import { merchandiseorderUncheckedUpdateWithoutSupplierInputObjectSchema } from './merchandiseorderUncheckedUpdateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpdateWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => merchandiseorderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => merchandiseorderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
