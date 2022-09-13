import { z } from 'zod';
import { MerchandiseCreateWithoutSaleItemInputObjectSchema } from './MerchandiseCreateWithoutSaleItemInput.schema';
import { MerchandiseUncheckedCreateWithoutSaleItemInputObjectSchema } from './MerchandiseUncheckedCreateWithoutSaleItemInput.schema';
import { MerchandiseCreateOrConnectWithoutSaleItemInputObjectSchema } from './MerchandiseCreateOrConnectWithoutSaleItemInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateNestedOneWithoutSaleItemInput> =
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
        connect: z
          .lazy(() => MerchandiseWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema =
  Schema;
