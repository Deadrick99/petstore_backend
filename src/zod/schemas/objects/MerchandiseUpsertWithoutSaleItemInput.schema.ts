import { z } from 'zod';
import { MerchandiseUpdateWithoutSaleItemInputObjectSchema } from './MerchandiseUpdateWithoutSaleItemInput.schema';
import { MerchandiseUncheckedUpdateWithoutSaleItemInputObjectSchema } from './MerchandiseUncheckedUpdateWithoutSaleItemInput.schema';
import { MerchandiseCreateWithoutSaleItemInputObjectSchema } from './MerchandiseCreateWithoutSaleItemInput.schema';
import { MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpsertWithoutSaleItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => MerchandiseUpdateWithoutSaleItemInputObjectSchema),
      z.lazy(() => MerchandiseUncheckedUpdateWithoutSaleItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MerchandiseCreateWithoutSaleItemInputObjectSchema),
      z.lazy(() => MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema),
    ]),
  })
  .strict();

export const MerchandiseUpsertWithoutSaleItemInputObjectSchema = Schema;
