import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemUpdateWithoutMerchandiseInputObjectSchema } from './saleitemUpdateWithoutMerchandiseInput.schema';
import { saleitemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedUpdateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpdateWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => saleitemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saleitemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => saleitemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saleitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
