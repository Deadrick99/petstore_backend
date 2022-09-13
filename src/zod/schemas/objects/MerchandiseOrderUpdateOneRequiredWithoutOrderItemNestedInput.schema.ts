import { z } from 'zod';
import { MerchandiseOrderCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateWithoutOrderItemInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutOrderItemInput.schema';
import { MerchandiseOrderCreateOrConnectWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateOrConnectWithoutOrderItemInput.schema';
import { MerchandiseOrderUpsertWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUpsertWithoutOrderItemInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUpdateWithoutOrderItemInput.schema';
import { MerchandiseOrderUncheckedUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseOrderUncheckedUpdateWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateOneRequiredWithoutOrderItemNestedInput> =
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
        upsert: z
          .lazy(() => MerchandiseOrderUpsertWithoutOrderItemInputObjectSchema)
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => MerchandiseOrderUpdateWithoutOrderItemInputObjectSchema,
            ),
            z.lazy(
              () =>
                MerchandiseOrderUncheckedUpdateWithoutOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseOrderUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema =
  Schema;
