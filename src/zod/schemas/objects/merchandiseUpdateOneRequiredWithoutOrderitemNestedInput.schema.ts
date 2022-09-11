import { z } from 'zod';
import { merchandiseCreateWithoutOrderitemInputObjectSchema } from './merchandiseCreateWithoutOrderitemInput.schema';
import { merchandiseUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutOrderitemInput.schema';
import { merchandiseCreateOrConnectWithoutOrderitemInputObjectSchema } from './merchandiseCreateOrConnectWithoutOrderitemInput.schema';
import { merchandiseUpsertWithoutOrderitemInputObjectSchema } from './merchandiseUpsertWithoutOrderitemInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseUpdateWithoutOrderitemInputObjectSchema } from './merchandiseUpdateWithoutOrderitemInput.schema';
import { merchandiseUncheckedUpdateWithoutOrderitemInputObjectSchema } from './merchandiseUncheckedUpdateWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpdateOneRequiredWithoutOrderitemNestedInput> =
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
        upsert: z
          .lazy(() => merchandiseUpsertWithoutOrderitemInputObjectSchema)
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
    z
      .object({
        update: z
          .union([
            z.lazy(() => merchandiseUpdateWithoutOrderitemInputObjectSchema),
            z.lazy(
              () => merchandiseUncheckedUpdateWithoutOrderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema =
  Schema;
