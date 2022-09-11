import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalUpdateWithoutAnimalInputObjectSchema } from './saleanimalUpdateWithoutAnimalInput.schema';
import { saleanimalUncheckedUpdateWithoutAnimalInputObjectSchema } from './saleanimalUncheckedUpdateWithoutAnimalInput.schema';
import { saleanimalCreateWithoutAnimalInputObjectSchema } from './saleanimalCreateWithoutAnimalInput.schema';
import { saleanimalUncheckedCreateWithoutAnimalInputObjectSchema } from './saleanimalUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpsertWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saleanimalUpdateWithoutAnimalInputObjectSchema),
        z.lazy(() => saleanimalUncheckedUpdateWithoutAnimalInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => saleanimalCreateWithoutAnimalInputObjectSchema),
        z.lazy(() => saleanimalUncheckedCreateWithoutAnimalInputObjectSchema),
      ]),
    })
    .strict();

export const saleanimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
