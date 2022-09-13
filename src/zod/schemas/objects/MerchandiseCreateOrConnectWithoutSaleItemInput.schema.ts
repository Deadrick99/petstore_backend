import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseCreateWithoutSaleItemInputObjectSchema } from './MerchandiseCreateWithoutSaleItemInput.schema';
import { MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateOrConnectWithoutSaleItemInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MerchandiseCreateWithoutSaleItemInputObjectSchema),
        z.lazy(
          () => MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseCreateOrConnectWithoutSaleItemInputObjectSchema =
  Schema;
