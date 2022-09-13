import { z } from 'zod';
import { AnimalOrderCreateWithoutSupplierInputObjectSchema } from './AnimalOrderCreateWithoutSupplierInput.schema';
import { AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutSupplierInput.schema';
import { AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema } from './AnimalOrderCreateOrConnectWithoutSupplierInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateNestedManyWithoutSupplierInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalOrderCreateWithoutSupplierInputObjectSchema),
            z
              .lazy(() => AnimalOrderCreateWithoutSupplierInputObjectSchema)
              .array(),
            z.lazy(
              () => AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema,
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
              () => AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema,
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

export const AnimalOrderCreateNestedManyWithoutSupplierInputObjectSchema =
  Schema;
