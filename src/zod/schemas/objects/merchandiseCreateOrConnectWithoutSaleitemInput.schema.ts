import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseCreateWithoutSaleitemInputObjectSchema } from './merchandiseCreateWithoutSaleitemInput.schema';
import { merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateOrConnectWithoutSaleitemInput> =
  z
    .object({
      where: z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => merchandiseCreateWithoutSaleitemInputObjectSchema),
        z.lazy(
          () => merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseCreateOrConnectWithoutSaleitemInputObjectSchema =
  Schema;
