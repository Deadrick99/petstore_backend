import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateWithoutMerchandiseorderInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateOrConnectWithoutMerchandiseorderInput> =
  z
    .object({
      where: z.lazy(() => orderitemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => orderitemCreateWithoutMerchandiseorderInputObjectSchema),
        z.lazy(
          () =>
            orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema =
  Schema;
