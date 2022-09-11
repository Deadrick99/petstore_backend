import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderUpdateWithoutSupplierInputObjectSchema } from './animalorderUpdateWithoutSupplierInput.schema';
import { animalorderUncheckedUpdateWithoutSupplierInputObjectSchema } from './animalorderUncheckedUpdateWithoutSupplierInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpdateWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => animalorderUpdateWithoutSupplierInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedUpdateWithoutSupplierInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema =
  Schema;
