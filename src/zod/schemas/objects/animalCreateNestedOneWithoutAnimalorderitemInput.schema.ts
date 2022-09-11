import { z } from 'zod';
import { animalCreateWithoutAnimalorderitemInputObjectSchema } from './animalCreateWithoutAnimalorderitemInput.schema';
import { animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema } from './animalUncheckedCreateWithoutAnimalorderitemInput.schema';
import { animalCreateOrConnectWithoutAnimalorderitemInputObjectSchema } from './animalCreateOrConnectWithoutAnimalorderitemInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateNestedOneWithoutAnimalorderitemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutAnimalorderitemInputObjectSchema),
            z.lazy(
              () =>
                animalUncheckedCreateWithoutAnimalorderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => animalCreateOrConnectWithoutAnimalorderitemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => animalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const animalCreateNestedOneWithoutAnimalorderitemInputObjectSchema =
  Schema;
