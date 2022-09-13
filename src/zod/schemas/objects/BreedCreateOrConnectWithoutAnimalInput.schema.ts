import { z } from 'zod';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';
import { BreedCreateWithoutAnimalInputObjectSchema } from './BreedCreateWithoutAnimalInput.schema';
import { BreedUncheckedCreateWithoutAnimalInputObjectSchema } from './BreedUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateOrConnectWithoutAnimalInput> = z
  .object({
    where: z.lazy(() => BreedWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => BreedCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => BreedUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const BreedCreateOrConnectWithoutAnimalInputObjectSchema = Schema;
