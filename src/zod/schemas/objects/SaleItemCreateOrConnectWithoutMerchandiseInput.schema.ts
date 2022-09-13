import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemCreateWithoutMerchandiseInputObjectSchema } from './SaleItemCreateWithoutMerchandiseInput.schema';
import { SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateOrConnectWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SaleItemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema =
  Schema;
