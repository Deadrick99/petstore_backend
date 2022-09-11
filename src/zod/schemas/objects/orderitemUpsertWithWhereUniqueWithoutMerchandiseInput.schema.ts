import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemUpdateWithoutMerchandiseInputObjectSchema } from './orderitemUpdateWithoutMerchandiseInput.schema';
import { orderitemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedUpdateWithoutMerchandiseInput.schema';
import { orderitemCreateWithoutMerchandiseInputObjectSchema } from './orderitemCreateWithoutMerchandiseInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpsertWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => orderitemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => orderitemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => orderitemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => orderitemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
