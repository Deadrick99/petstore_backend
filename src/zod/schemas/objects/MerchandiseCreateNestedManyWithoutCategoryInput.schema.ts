import { z } from 'zod';
import { MerchandiseCreateWithoutCategoryInputObjectSchema } from './MerchandiseCreateWithoutCategoryInput.schema';
import { MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedCreateWithoutCategoryInput.schema';
import { MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema } from './MerchandiseCreateOrConnectWithoutCategoryInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseCreateNestedManyWithoutCategoryInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MerchandiseCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => MerchandiseCreateWithoutCategoryInputObjectSchema)
              .array(),
            z.lazy(
              () => MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
