import { z } from 'zod';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderCreateWithoutEmployeeInputObjectSchema } from './animalorderCreateWithoutEmployeeInput.schema';
import { animalorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './animalorderUncheckedCreateWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderCreateOrConnectWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => animalorderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => animalorderCreateWithoutEmployeeInputObjectSchema),
        z.lazy(
          () => animalorderUncheckedCreateWithoutEmployeeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderCreateOrConnectWithoutEmployeeInputObjectSchema =
  Schema;
