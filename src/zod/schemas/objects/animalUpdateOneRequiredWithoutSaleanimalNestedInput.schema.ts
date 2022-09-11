import { z } from 'zod';
import { animalCreateWithoutSaleanimalInputObjectSchema } from './animalCreateWithoutSaleanimalInput.schema';
import { animalUncheckedCreateWithoutSaleanimalInputObjectSchema } from './animalUncheckedCreateWithoutSaleanimalInput.schema';
import { animalCreateOrConnectWithoutSaleanimalInputObjectSchema } from './animalCreateOrConnectWithoutSaleanimalInput.schema';
import { animalUpsertWithoutSaleanimalInputObjectSchema } from './animalUpsertWithoutSaleanimalInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithoutSaleanimalInputObjectSchema } from './animalUpdateWithoutSaleanimalInput.schema';
import { animalUncheckedUpdateWithoutSaleanimalInputObjectSchema } from './animalUncheckedUpdateWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateOneRequiredWithoutSaleanimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutSaleanimalInputObjectSchema),
            z.lazy(
              () => animalUncheckedCreateWithoutSaleanimalInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => animalCreateOrConnectWithoutSaleanimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => animalUpsertWithoutSaleanimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => animalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => animalUpdateWithoutSaleanimalInputObjectSchema),
            z.lazy(
              () => animalUncheckedUpdateWithoutSaleanimalInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema =
  Schema;
