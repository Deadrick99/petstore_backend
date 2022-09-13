import { z } from 'zod';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';
import { OrderItemUpdateManyMutationInputObjectSchema } from './OrderItemUpdateManyMutationInput.schema';
import { OrderItemUncheckedUpdateManyWithoutOrderItemInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateManyWithWhereWithoutMerchandiseOrderInput> =
  z
    .object({
      where: z.lazy(() => OrderItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => OrderItemUncheckedUpdateManyWithoutOrderItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemUpdateManyWithWhereWithoutMerchandiseOrderInputObjectSchema =
  Schema;
