import { z } from 'zod';
import { MerchandiseCreateWithoutOrderItemInputObjectSchema } from './MerchandiseCreateWithoutOrderItemInput.schema';
import { MerchandiseUncheckedCreateWithoutOrderItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutOrderItemInput.schema';
import { MerchandiseCreateOrConnectWithoutOrderItemInputObjectSchema } from './MerchandiseCreateOrConnectWithoutOrderItemInput.schema';
import { MerchandiseUpsertWithoutOrderItemInputObjectSchema } from './MerchandiseUpsertWithoutOrderItemInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseUpdateWithoutOrderItemInput.schema';
import { MerchandiseUncheckedUpdateWithoutOrderItemInputObjectSchema } from './MerchandiseUncheckedUpdateWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpdateOneRequiredWithoutOrderItemNestedInput> =
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
        upsert: z
          .lazy(() => MerchandiseUpsertWithoutOrderItemInputObjectSchema)
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
    z
      .object({
        update: z
          .union([
            z.lazy(() => MerchandiseUpdateWithoutOrderItemInputObjectSchema),
            z.lazy(
              () => MerchandiseUncheckedUpdateWithoutOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema =
  Schema;
