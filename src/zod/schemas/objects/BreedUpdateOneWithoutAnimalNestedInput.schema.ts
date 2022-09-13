import { z } from 'zod';
import { BreedCreateWithoutAnimalInputObjectSchema } from './BreedCreateWithoutAnimalInput.schema';
import { BreedUncheckedCreateWithoutAnimalInputObjectSchema } from './BreedUncheckedCreateWithoutAnimalInput.schema';
import { BreedCreateOrConnectWithoutAnimalInputObjectSchema } from './BreedCreateOrConnectWithoutAnimalInput.schema';
import { BreedUpsertWithoutAnimalInputObjectSchema } from './BreedUpsertWithoutAnimalInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';
import { BreedUpdateWithoutAnimalInputObjectSchema } from './BreedUpdateWithoutAnimalInput.schema';
import { BreedUncheckedUpdateWithoutAnimalInputObjectSchema } from './BreedUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateOneWithoutAnimalNestedInput> =
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
        upsert: z
          .lazy(() => BreedUpsertWithoutAnimalInputObjectSchema)
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
        connect: z.lazy(() => BreedWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => BreedUpdateWithoutAnimalInputObjectSchema),
            z.lazy(() => BreedUncheckedUpdateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const BreedUpdateOneWithoutAnimalNestedInputObjectSchema = Schema;
