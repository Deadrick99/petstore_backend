import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateWithoutMerchandiseOrderInput.schema';
import { SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutMerchandiseOrderInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutMerchandiseOrderInputObjectSchema),
        z.lazy(
          () => SupplierUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SupplierCreateOrConnectWithoutMerchandiseOrderInputObjectSchema =
  Schema;
