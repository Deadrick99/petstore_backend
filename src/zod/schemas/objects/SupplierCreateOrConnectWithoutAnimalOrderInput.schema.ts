import { z } from 'zod';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierCreateWithoutAnimalOrderInputObjectSchema } from './SupplierCreateWithoutAnimalOrderInput.schema';
import { SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './SupplierUncheckedCreateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutAnimalOrderInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutAnimalOrderInputObjectSchema),
        z.lazy(
          () => SupplierUncheckedCreateWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SupplierCreateOrConnectWithoutAnimalOrderInputObjectSchema =
  Schema;
