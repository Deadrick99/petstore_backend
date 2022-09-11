import { z } from 'zod';
import { animalorderitemScalarWhereInputObjectSchema } from './animalorderitemScalarWhereInput.schema';
import { animalorderitemUpdateManyMutationInputObjectSchema } from './animalorderitemUpdateManyMutationInput.schema';
import { animalorderitemUncheckedUpdateManyWithoutAnimalorderitemInputObjectSchema } from './animalorderitemUncheckedUpdateManyWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateManyWithWhereWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => animalorderitemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => animalorderitemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            animalorderitemUncheckedUpdateManyWithoutAnimalorderitemInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const animalorderitemUpdateManyWithWhereWithoutAnimalInputObjectSchema =
  Schema;
