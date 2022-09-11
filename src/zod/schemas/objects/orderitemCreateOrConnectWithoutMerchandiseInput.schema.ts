import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemCreateWithoutMerchandiseInputObjectSchema } from './orderitemCreateWithoutMerchandiseInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemCreateOrConnectWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => orderitemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => orderitemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema =
  Schema;
