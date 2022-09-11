import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseCreateWithoutOrderitemInputObjectSchema } from './merchandiseCreateWithoutOrderitemInput.schema';
import { merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateOrConnectWithoutOrderitemInput> =
  z
    .object({
      where: z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => merchandiseCreateWithoutOrderitemInputObjectSchema),
        z.lazy(
          () => merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const merchandiseCreateOrConnectWithoutOrderitemInputObjectSchema =
  Schema;
