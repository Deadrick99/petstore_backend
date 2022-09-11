import { z } from 'zod';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalCreateWithoutSaleanimalInputObjectSchema } from './animalCreateWithoutSaleanimalInput.schema';
import { animalUncheckedCreateWithoutSaleanimalInputObjectSchema } from './animalUncheckedCreateWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateOrConnectWithoutSaleanimalInput> = z
  .object({
    where: z.lazy(() => animalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => animalCreateWithoutSaleanimalInputObjectSchema),
      z.lazy(() => animalUncheckedCreateWithoutSaleanimalInputObjectSchema),
    ]),
  })
  .strict();

export const animalCreateOrConnectWithoutSaleanimalInputObjectSchema = Schema;
