import { z } from 'zod';
import { MerchandiseCreateWithoutSaleItemInputObjectSchema } from './MerchandiseCreateWithoutSaleItemInput.schema';
import { MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutSaleItemInput.schema';
import { MerchandiseCreateOrConnectWithoutSaleItemInputObjectSchema } from './MerchandiseCreateOrConnectWithoutSaleItemInput.schema';
import { MerchandiseUpsertWithoutSaleItemInputObjectSchema } from './MerchandiseUpsertWithoutSaleItemInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseUpdateWithoutSaleItemInputObjectSchema } from './MerchandiseUpdateWithoutSaleItemInput.schema';
import { MerchandiseUncheckedUpdateWithoutSaleItemInputObjectSchema } from './MerchandiseUncheckedUpdateWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpdateOneRequiredWithoutSaleItemNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MerchandiseCreateWithoutSaleItemInputObjectSchema),
            z.lazy(
              () => MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => MerchandiseCreateOrConnectWithoutSaleItemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => MerchandiseUpsertWithoutSaleItemInputObjectSchema)
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
            z.lazy(() => MerchandiseUpdateWithoutSaleItemInputObjectSchema),
            z.lazy(
              () => MerchandiseUncheckedUpdateWithoutSaleItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema =
  Schema;
