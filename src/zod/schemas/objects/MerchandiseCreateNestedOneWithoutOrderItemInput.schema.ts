import { z } from 'zod';
import { MerchandiseCreateWithoutOrderItemInputObjectSchema } from './MerchandiseCreateWithoutOrderItemInput.schema';
import { MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutOrderItemInput.schema';
import { MerchandiseCreateOrConnectWithoutOrderItemInputObjectSchema } from './MerchandiseCreateOrConnectWithoutOrderItemInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateNestedOneWithoutOrderItemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MerchandiseCreateWithoutOrderItemInputObjectSchema),
            z.lazy(
              () => MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => MerchandiseCreateOrConnectWithoutOrderItemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => MerchandiseWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseCreateNestedOneWithoutOrderItemInputObjectSchema =
  Schema;
