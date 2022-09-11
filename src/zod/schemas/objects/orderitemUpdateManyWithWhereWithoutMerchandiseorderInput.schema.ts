import { z } from 'zod';
import { orderitemScalarWhereInputObjectSchema } from './orderitemScalarWhereInput.schema';
import { orderitemUpdateManyMutationInputObjectSchema } from './orderitemUpdateManyMutationInput.schema';
import { orderitemUncheckedUpdateManyWithoutOrderitemInputObjectSchema } from './orderitemUncheckedUpdateManyWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateManyWithWhereWithoutMerchandiseorderInput> =
  z
    .object({
      where: z.lazy(() => orderitemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => orderitemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => orderitemUncheckedUpdateManyWithoutOrderitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const orderitemUpdateManyWithWhereWithoutMerchandiseorderInputObjectSchema =
  Schema;
