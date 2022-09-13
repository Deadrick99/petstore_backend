import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseCreateWithoutOrderItemInputObjectSchema } from './MerchandiseCreateWithoutOrderItemInput.schema';
import { MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateOrConnectWithoutOrderItemInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MerchandiseCreateWithoutOrderItemInputObjectSchema),
        z.lazy(
          () => MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseCreateOrConnectWithoutOrderItemInputObjectSchema =
  Schema;
