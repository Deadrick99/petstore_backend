import { z } from 'zod';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderCreateWithoutSupplierInputObjectSchema } from './AnimalOrderCreateWithoutSupplierInput.schema';
import { AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateOrConnectWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AnimalOrderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema =
  Schema;
