import { z } from 'zod';
import { animalorderScalarWhereInputObjectSchema } from './animalorderScalarWhereInput.schema';
import { animalorderUpdateManyMutationInputObjectSchema } from './animalorderUpdateManyMutationInput.schema';
import { animalorderUncheckedUpdateManyWithoutAnimalorderInputObjectSchema } from './animalorderUncheckedUpdateManyWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpdateManyWithWhereWithoutEmployeeInput> =
  z
    .object({
      where: z.lazy(() => animalorderScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => animalorderUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            animalorderUncheckedUpdateManyWithoutAnimalorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderUpdateManyWithWhereWithoutEmployeeInputObjectSchema =
  Schema;
