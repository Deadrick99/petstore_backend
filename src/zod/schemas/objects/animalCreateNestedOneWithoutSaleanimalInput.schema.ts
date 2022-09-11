import { z } from 'zod';
import { animalCreateWithoutSaleanimalInputObjectSchema } from './animalCreateWithoutSaleanimalInput.schema';
import { animalUncheckedCreateWithoutSaleanimalInputObjectSchema } from './animalUncheckedCreateWithoutSaleanimalInput.schema';
import { animalCreateOrConnectWithoutSaleanimalInputObjectSchema } from './animalCreateOrConnectWithoutSaleanimalInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalCreateNestedOneWithoutSaleanimalInput> =
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
        connect: z.lazy(() => animalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const animalCreateNestedOneWithoutSaleanimalInputObjectSchema = Schema;
