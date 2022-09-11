import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemCreateWithoutMerchandiseInputObjectSchema } from './saleitemCreateWithoutMerchandiseInput.schema';
import { saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemCreateOrConnectWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => saleitemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => saleitemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema =
  Schema;
