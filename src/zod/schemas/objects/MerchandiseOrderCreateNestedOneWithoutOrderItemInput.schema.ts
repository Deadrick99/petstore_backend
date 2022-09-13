import { z } from 'zod';
import { MerchandiseOrderCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateWithoutOrderItemInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutOrderItemInput.schema';
import { MerchandiseOrderCreateOrConnectWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateOrConnectWithoutOrderItemInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateNestedOneWithoutOrderItemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => MerchandiseOrderCreateWithoutOrderItemInputObjectSchema,
            ),
            z.lazy(
              () =>
                MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () =>
              MerchandiseOrderCreateOrConnectWithoutOrderItemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseOrderCreateNestedOneWithoutOrderItemInputObjectSchema =
  Schema;
