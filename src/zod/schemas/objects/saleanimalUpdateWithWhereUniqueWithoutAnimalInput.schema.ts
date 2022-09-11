import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalUpdateWithoutAnimalInputObjectSchema } from './saleanimalUpdateWithoutAnimalInput.schema';
import { saleanimalUncheckedUpdateWithoutAnimalInputObjectSchema } from './saleanimalUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saleanimalUpdateWithoutAnimalInputObjectSchema),
        z.lazy(() => saleanimalUncheckedUpdateWithoutAnimalInputObjectSchema),
      ]),
    })
    .strict();

export const saleanimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
