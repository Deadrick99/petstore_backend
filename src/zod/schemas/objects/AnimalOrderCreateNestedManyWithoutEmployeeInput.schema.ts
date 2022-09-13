import { z } from 'zod';
import { AnimalOrderCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateWithoutEmployeeInput.schema';
import { AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutEmployeeInput.schema';
import { AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateOrConnectWithoutEmployeeInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateNestedManyWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalOrderCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => AnimalOrderCreateWithoutEmployeeInputObjectSchema)
              .array(),
            z.lazy(
              () => AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
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
              () => AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalOrderCreateNestedManyWithoutEmployeeInputObjectSchema =
  Schema;
