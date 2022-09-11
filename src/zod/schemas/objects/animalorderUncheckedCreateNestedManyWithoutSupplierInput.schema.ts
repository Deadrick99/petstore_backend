import { z } from 'zod';
import { animalorderCreateWithoutSupplierInputObjectSchema } from './animalorderCreateWithoutSupplierInput.schema';
import { animalorderUncheckedCreateWithoutSupplierInputObjectSchema } from './animalorderUncheckedCreateWithoutSupplierInput.schema';
import { animalorderCreateOrConnectWithoutSupplierInputObjectSchema } from './animalorderCreateOrConnectWithoutSupplierInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUncheckedCreateNestedManyWithoutSupplierInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalorderCreateWithoutSupplierInputObjectSchema),
            z
              .lazy(() => animalorderCreateWithoutSupplierInputObjectSchema)
              .array(),
            z.lazy(
              () => animalorderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderUncheckedCreateWithoutSupplierInputObjectSchema,
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
              () => animalorderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderCreateOrConnectWithoutSupplierInputObjectSchema,
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

export const animalorderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema =
  Schema;
