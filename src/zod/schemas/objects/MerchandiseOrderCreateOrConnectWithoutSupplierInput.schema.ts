import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateOrConnectWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MerchandiseOrderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema =
  Schema;
