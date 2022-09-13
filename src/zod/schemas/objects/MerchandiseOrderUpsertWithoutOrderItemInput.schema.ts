import { z } from 'zod';
import { MerchandiseOrderUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUpdateWithoutOrderItemInput.schema';
import { MerchandiseOrderUncheckedUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUncheckedUpdateWithoutOrderItemInput.schema';
import { MerchandiseOrderCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateWithoutOrderItemInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpsertWithoutOrderItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => MerchandiseOrderUpdateWithoutOrderItemInputObjectSchema),
      z.lazy(
        () => MerchandiseOrderUncheckedUpdateWithoutOrderItemInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => MerchandiseOrderCreateWithoutOrderItemInputObjectSchema),
      z.lazy(
        () => MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MerchandiseOrderUpsertWithoutOrderItemInputObjectSchema = Schema;
