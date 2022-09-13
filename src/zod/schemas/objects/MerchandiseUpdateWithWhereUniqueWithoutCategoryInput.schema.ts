import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseUpdateWithoutCategoryInputObjectSchema } from './MerchandiseUpdateWithoutCategoryInput.schema';
import { MerchandiseUncheckedUpdateWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MerchandiseUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MerchandiseUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
