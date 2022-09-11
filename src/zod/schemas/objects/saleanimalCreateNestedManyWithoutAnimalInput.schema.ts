import { z } from 'zod';
import { saleanimalCreateWithoutAnimalInputObjectSchema } from './saleanimalCreateWithoutAnimalInput.schema';
import { saleanimalUncheckedCreateWithoutAnimalInputObjectSchema } from './saleanimalUncheckedCreateWithoutAnimalInput.schema';
import { saleanimalCreateOrConnectWithoutAnimalInputObjectSchema } from './saleanimalCreateOrConnectWithoutAnimalInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateNestedManyWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleanimalCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => saleanimalCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () => saleanimalUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => saleanimalUncheckedCreateWithoutAnimalInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => saleanimalCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => saleanimalCreateOrConnectWithoutAnimalInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleanimalCreateNestedManyWithoutAnimalInputObjectSchema = Schema;
