import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemUpdateWithoutMerchandiseInputObjectSchema } from './orderitemUpdateWithoutMerchandiseInput.schema';
import { orderitemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedUpdateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => orderitemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => orderitemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => orderitemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
