import { z } from 'zod';
import { breedCreateWithoutAnimalInputObjectSchema } from './breedCreateWithoutAnimalInput.schema';
import { breedUncheckedCreateWithoutAnimalInputObjectSchema } from './breedUncheckedCreateWithoutAnimalInput.schema';
import { breedCreateOrConnectWithoutAnimalInputObjectSchema } from './breedCreateOrConnectWithoutAnimalInput.schema';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedCreateNestedOneWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => breedCreateWithoutAnimalInputObjectSchema),
            z.lazy(() => breedUncheckedCreateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => breedCreateOrConnectWithoutAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => breedWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const breedCreateNestedOneWithoutAnimalInputObjectSchema = Schema;
