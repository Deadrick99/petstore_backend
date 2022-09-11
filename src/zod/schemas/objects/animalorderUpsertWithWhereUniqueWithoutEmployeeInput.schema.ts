import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderUpdateWithoutEmployeeInputObjectSchema } from './animalorderUpdateWithoutEmployeeInput.schema';
import { animalorderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './animalorderUncheckedUpdateWithoutEmployeeInput.schema';
import { animalorderCreateWithoutEmployeeInputObjectSchema } from './animalorderCreateWithoutEmployeeInput.schema';
import { animalorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './animalorderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpsertWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => animalorderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => animalorderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
