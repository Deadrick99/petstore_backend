import { z } from 'zod';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';
import { breedCreateWithoutAnimalInputObjectSchema } from './breedCreateWithoutAnimalInput.schema';
import { breedUncheckedCreateWithoutAnimalInputObjectSchema } from './breedUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedCreateOrConnectWithoutAnimalInput> = z
  .object({
    where: z.lazy(() => breedWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => breedCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => breedUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const breedCreateOrConnectWithoutAnimalInputObjectSchema = Schema;
