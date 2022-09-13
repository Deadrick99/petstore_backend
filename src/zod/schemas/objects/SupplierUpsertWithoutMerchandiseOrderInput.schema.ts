import { z } from 'zod';
import { SupplierUpdateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUpdateWithoutMerchandiseOrderInput.schema';
import { SupplierUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUncheckedUpdateWithoutMerchandiseOrderInput.schema';
import { SupplierCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateWithoutMerchandiseOrderInput.schema';
import { SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpsertWithoutMerchandiseOrderInput> = z
  .object({
    update: z.union([
      z.lazy(() => SupplierUpdateWithoutMerchandiseOrderInputObjectSchema),
      z.lazy(
        () => SupplierUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => SupplierCreateWithoutMerchandiseOrderInputObjectSchema),
      z.lazy(
        () => SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const SupplierUpsertWithoutMerchandiseOrderInputObjectSchema = Schema;
