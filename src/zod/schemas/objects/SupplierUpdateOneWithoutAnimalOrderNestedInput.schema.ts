import { z } from 'zod';
import { SupplierCreateWithoutAnimalOrderInputObjectSchema } from './SupplierCreateWithoutAnimalOrderInput.schema';
import { SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutAnimalOrderInput.schema';
import { SupplierCreateOrConnectWithoutAnimalOrderInputObjectSchema } from './SupplierCreateOrConnectWithoutAnimalOrderInput.schema';
import { SupplierUpsertWithoutAnimalOrderInputObjectSchema } from './SupplierUpsertWithoutAnimalOrderInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithoutAnimalOrderInputObjectSchema } from './SupplierUpdateWithoutAnimalOrderInput.schema';
import { SupplierUncheckedUpdateWithoutAnimalOrderInputObjectSchema } from './SupplierUncheckedUpdateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateOneWithoutAnimalOrderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SupplierCreateWithoutAnimalOrderInputObjectSchema),
            z.lazy(
              () => SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => SupplierCreateOrConnectWithoutAnimalOrderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => SupplierUpsertWithoutAnimalOrderInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => SupplierUpdateWithoutAnimalOrderInputObjectSchema),
            z.lazy(
              () => SupplierUncheckedUpdateWithoutAnimalOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SupplierUpdateOneWithoutAnimalOrderNestedInputObjectSchema =
  Schema;
