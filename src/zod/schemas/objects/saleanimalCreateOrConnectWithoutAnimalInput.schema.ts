import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalCreateWithoutAnimalInputObjectSchema } from './saleanimalCreateWithoutAnimalInput.schema';
import { saleanimalUncheckedCreateWithoutAnimalInputObjectSchema } from './saleanimalUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateOrConnectWithoutAnimalInput> = z
  .object({
    where: z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleanimalCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => saleanimalUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const saleanimalCreateOrConnectWithoutAnimalInputObjectSchema = Schema;
