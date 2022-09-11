import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderUpdateWithoutSupplierInputObjectSchema } from './animalorderUpdateWithoutSupplierInput.schema';
import { animalorderUncheckedUpdateWithoutSupplierInputObjectSchema } from './animalorderUncheckedUpdateWithoutSupplierInput.schema';
import { animalorderCreateWithoutSupplierInputObjectSchema } from './animalorderCreateWithoutSupplierInput.schema';
import { animalorderUncheckedCreateWithoutSupplierInputObjectSchema } from './animalorderUncheckedCreateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpsertWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => animalorderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => animalorderCreateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedCreateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
