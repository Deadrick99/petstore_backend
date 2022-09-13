import { z } from 'zod';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateWithoutOrderItemInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateOrConnectWithoutOrderItemInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MerchandiseOrderCreateWithoutOrderItemInputObjectSchema),
        z.lazy(
          () =>
            MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseOrderCreateOrConnectWithoutOrderItemInputObjectSchema =
  Schema;
