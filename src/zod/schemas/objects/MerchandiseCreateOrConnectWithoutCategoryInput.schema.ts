import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseCreateWithoutCategoryInputObjectSchema } from './MerchandiseCreateWithoutCategoryInput.schema';
import { MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateOrConnectWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MerchandiseCreateWithoutCategoryInputObjectSchema),
        z.lazy(
          () => MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema =
  Schema;
