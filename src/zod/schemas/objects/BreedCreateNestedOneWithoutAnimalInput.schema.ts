import { z } from 'zod';
import { BreedCreateWithoutAnimalInputObjectSchema } from './BreedCreateWithoutAnimalInput.schema';
import { BreedUncheckedCreateWithoutAnimalInputObjectSchema } from './BreedUncheckedCreateWithoutAnimalInput.schema';
import { BreedCreateOrConnectWithoutAnimalInputObjectSchema } from './BreedCreateOrConnectWithoutAnimalInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateNestedOneWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => BreedCreateWithoutAnimalInputObjectSchema),
            z.lazy(() => BreedUncheckedCreateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => BreedCreateOrConnectWithoutAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => BreedWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const BreedCreateNestedOneWithoutAnimalInputObjectSchema = Schema;
