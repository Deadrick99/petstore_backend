import { z } from 'zod';
import { MerchandiseOrderCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutEmployeeInput.schema';
import { MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateOrConnectWithoutEmployeeInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUncheckedCreateNestedManyWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => MerchandiseOrderCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => MerchandiseOrderCreateWithoutEmployeeInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
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
              () =>
                MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseOrderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema =
  Schema;
