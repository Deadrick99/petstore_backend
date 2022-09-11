import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemUpdateWithoutMerchandiseorderInputObjectSchema } from './orderitemUpdateWithoutMerchandiseorderInput.schema';
import { orderitemUncheckedUpdateWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedUpdateWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateWithWhereUniqueWithoutMerchandiseorderInput> =
  z
    .object({
      where: z.lazy(() => orderitemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => orderitemUpdateWithoutMerchandiseorderInputObjectSchema),
        z.lazy(
          () =>
            orderitemUncheckedUpdateWithoutMerchandiseorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemUpdateWithWhereUniqueWithoutMerchandiseorderInputObjectSchema =
  Schema;
