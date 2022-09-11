import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemUpdateWithoutMerchandiseInputObjectSchema } from './saleitemUpdateWithoutMerchandiseInput.schema';
import { saleitemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedUpdateWithoutMerchandiseInput.schema';
import { saleitemCreateWithoutMerchandiseInputObjectSchema } from './saleitemCreateWithoutMerchandiseInput.schema';
import { saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpsertWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => saleitemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saleitemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => saleitemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => saleitemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saleitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
