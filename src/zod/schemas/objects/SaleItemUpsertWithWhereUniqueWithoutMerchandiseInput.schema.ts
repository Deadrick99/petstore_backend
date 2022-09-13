import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutMerchandiseInputObjectSchema } from './SaleItemUpdateWithoutMerchandiseInput.schema';
import { SaleItemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedUpdateWithoutMerchandiseInput.schema';
import { SaleItemCreateWithoutMerchandiseInputObjectSchema } from './SaleItemCreateWithoutMerchandiseInput.schema';
import { SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpsertWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleItemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => SaleItemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SaleItemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SaleItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
