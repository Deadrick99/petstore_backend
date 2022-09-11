import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderCreateWithoutSupplierInputObjectSchema } from './animalorderCreateWithoutSupplierInput.schema';
import { animalorderUncheckedCreateWithoutSupplierInputObjectSchema } from './animalorderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateOrConnectWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => animalorderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderCreateOrConnectWithoutSupplierInputObjectSchema =
  Schema;
