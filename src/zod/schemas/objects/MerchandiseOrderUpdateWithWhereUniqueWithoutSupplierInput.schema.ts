import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUpdateWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedUpdateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedUpdateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MerchandiseOrderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
