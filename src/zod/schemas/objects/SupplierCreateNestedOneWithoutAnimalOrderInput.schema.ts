import { z } from 'zod';
import { SupplierCreateWithoutAnimalOrderInputObjectSchema } from './SupplierCreateWithoutAnimalOrderInput.schema';
import { SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutAnimalOrderInput.schema';
import { SupplierCreateOrConnectWithoutAnimalOrderInputObjectSchema } from './SupplierCreateOrConnectWithoutAnimalOrderInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateNestedOneWithoutAnimalOrderInput> =
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
        connect: z.lazy(() => SupplierWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const SupplierCreateNestedOneWithoutAnimalOrderInputObjectSchema =
  Schema;
