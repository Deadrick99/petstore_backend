import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseUpdateWithoutCategoryInputObjectSchema } from './MerchandiseUpdateWithoutCategoryInput.schema';
import { MerchandiseUncheckedUpdateWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedUpdateWithoutCategoryInput.schema';
import { MerchandiseCreateWithoutCategoryInputObjectSchema } from './MerchandiseCreateWithoutCategoryInput.schema';
import { MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MerchandiseUpdateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MerchandiseUncheckedUpdateWithoutCategoryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MerchandiseCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema =
  Schema;
