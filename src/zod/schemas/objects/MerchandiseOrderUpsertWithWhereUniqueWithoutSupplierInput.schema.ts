import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUpdateWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedUpdateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedUpdateWithoutSupplierInput.schema';
import { MerchandiseOrderCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpsertWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MerchandiseOrderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MerchandiseOrderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
