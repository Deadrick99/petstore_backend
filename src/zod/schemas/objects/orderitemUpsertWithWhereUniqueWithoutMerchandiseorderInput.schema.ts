import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemUpdateWithoutMerchandiseorderInputObjectSchema } from './orderitemUpdateWithoutMerchandiseorderInput.schema';
import { orderitemUncheckedUpdateWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedUpdateWithoutMerchandiseorderInput.schema';
import { orderitemCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateWithoutMerchandiseorderInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpsertWithWhereUniqueWithoutMerchandiseorderInput> =
  z
    .object({
      where: z.lazy(() => orderitemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => orderitemUpdateWithoutMerchandiseorderInputObjectSchema),
        z.lazy(
          () =>
            orderitemUncheckedUpdateWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => orderitemCreateWithoutMerchandiseorderInputObjectSchema),
        z.lazy(
          () =>
            orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemUpsertWithWhereUniqueWithoutMerchandiseorderInputObjectSchema =
  Schema;
