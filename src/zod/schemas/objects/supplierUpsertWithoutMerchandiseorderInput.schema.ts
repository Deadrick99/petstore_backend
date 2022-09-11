import { z } from 'zod';
import { supplierUpdateWithoutMerchandiseorderInputObjectSchema } from './supplierUpdateWithoutMerchandiseorderInput.schema';
import { supplierUncheckedUpdateWithoutMerchandiseorderInputObjectSchema } from './supplierUncheckedUpdateWithoutMerchandiseorderInput.schema';
import { supplierCreateWithoutMerchandiseorderInputObjectSchema } from './supplierCreateWithoutMerchandiseorderInput.schema';
import { supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './supplierUncheckedCreateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUpsertWithoutMerchandiseorderInput> = z
  .object({
    update: z.union([
      z.lazy(() => supplierUpdateWithoutMerchandiseorderInputObjectSchema),
      z.lazy(
        () => supplierUncheckedUpdateWithoutMerchandiseorderInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => supplierCreateWithoutMerchandiseorderInputObjectSchema),
      z.lazy(
        () => supplierUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const supplierUpsertWithoutMerchandiseorderInputObjectSchema = Schema;
