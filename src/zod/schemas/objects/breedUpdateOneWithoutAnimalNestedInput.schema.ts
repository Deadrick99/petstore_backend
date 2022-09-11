import { z } from 'zod';
import { breedCreateWithoutAnimalInputObjectSchema } from './breedCreateWithoutAnimalInput.schema';
import { breedUncheckedCreateWithoutAnimalInputObjectSchema } from './breedUncheckedCreateWithoutAnimalInput.schema';
import { breedCreateOrConnectWithoutAnimalInputObjectSchema } from './breedCreateOrConnectWithoutAnimalInput.schema';
import { breedUpsertWithoutAnimalInputObjectSchema } from './breedUpsertWithoutAnimalInput.schema';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';
import { breedUpdateWithoutAnimalInputObjectSchema } from './breedUpdateWithoutAnimalInput.schema';
import { breedUncheckedUpdateWithoutAnimalInputObjectSchema } from './breedUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateOneWithoutAnimalNestedInput> =
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
        upsert: z
          .lazy(() => breedUpsertWithoutAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => breedWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => breedUpdateWithoutAnimalInputObjectSchema),
            z.lazy(() => breedUncheckedUpdateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const breedUpdateOneWithoutAnimalNestedInputObjectSchema = Schema;
