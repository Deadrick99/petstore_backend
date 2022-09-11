import { z } from 'zod';
import { merchandiseCreateWithoutOrderitemInputObjectSchema } from './merchandiseCreateWithoutOrderitemInput.schema';
import { merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutOrderitemInput.schema';
import { merchandiseCreateOrConnectWithoutOrderitemInputObjectSchema } from './merchandiseCreateOrConnectWithoutOrderitemInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateNestedOneWithoutOrderitemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => merchandiseCreateWithoutOrderitemInputObjectSchema),
            z.lazy(
              () => merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => merchandiseCreateOrConnectWithoutOrderitemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => merchandiseWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseCreateNestedOneWithoutOrderitemInputObjectSchema =
  Schema;
