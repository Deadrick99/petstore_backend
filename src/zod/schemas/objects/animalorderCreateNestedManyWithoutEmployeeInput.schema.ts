import { z } from 'zod';
import { animalorderCreateWithoutEmployeeInputObjectSchema } from './animalorderCreateWithoutEmployeeInput.schema';
import { animalorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './animalorderUncheckedCreateWithoutEmployeeInput.schema';
import { animalorderCreateOrConnectWithoutEmployeeInputObjectSchema } from './animalorderCreateOrConnectWithoutEmployeeInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateNestedManyWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalorderCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => animalorderCreateWithoutEmployeeInputObjectSchema)
              .array(),
            z.lazy(
              () => animalorderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderUncheckedCreateWithoutEmployeeInputObjectSchema,
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
              () => animalorderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderCreateOrConnectWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => animalorderWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalorderCreateNestedManyWithoutEmployeeInputObjectSchema =
  Schema;
