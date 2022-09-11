import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderUpdateWithoutEmployeeInputObjectSchema } from './animalorderUpdateWithoutEmployeeInput.schema';
import { animalorderUncheckedUpdateWithoutEmployeeInputObjectSchema } from './animalorderUncheckedUpdateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpdateWithWhereUniqueWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => animalorderUpdateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedUpdateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema =
  Schema;
