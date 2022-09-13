import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutMerchandiseInputObjectSchema } from './SaleItemUpdateWithoutMerchandiseInput.schema';
import { SaleItemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedUpdateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleItemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => SaleItemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SaleItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
