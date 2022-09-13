import { z } from 'zod';
import { MerchandiseUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseUpdateWithoutOrderItemInput.schema';
import { MerchandiseUncheckedUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseUncheckedUpdateWithoutOrderItemInput.schema';
import { MerchandiseCreateWithoutOrderItemInputObjectSchema } from './MerchandiseCreateWithoutOrderItemInput.schema';
import { MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpsertWithoutOrderItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => MerchandiseUpdateWithoutOrderItemInputObjectSchema),
      z.lazy(() => MerchandiseUncheckedUpdateWithoutOrderItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MerchandiseCreateWithoutOrderItemInputObjectSchema),
      z.lazy(() => MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema),
    ]),
  })
  .strict();

export const MerchandiseUpsertWithoutOrderItemInputObjectSchema = Schema;
