import { z } from 'zod';
import { AnimalCreateWithoutSaleAnimalInputObjectSchema } from './AnimalCreateWithoutSaleAnimalInput.schema';
import { AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './AnimalUncheckedCreateWithoutSaleAnimalInput.schema';
import { AnimalCreateOrConnectWithoutSaleAnimalInputObjectSchema } from './AnimalCreateOrConnectWithoutSaleAnimalInput.schema';
import { AnimalUpsertWithoutSaleAnimalInputObjectSchema } from './AnimalUpsertWithoutSaleAnimalInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithoutSaleAnimalInputObjectSchema } from './AnimalUpdateWithoutSaleAnimalInput.schema';
import { AnimalUncheckedUpdateWithoutSaleAnimalInputObjectSchema } from './AnimalUncheckedUpdateWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateOneRequiredWithoutSaleAnimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalCreateWithoutSaleAnimalInputObjectSchema),
            z.lazy(
              () => AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => AnimalCreateOrConnectWithoutSaleAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => AnimalUpsertWithoutSaleAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => AnimalUpdateWithoutSaleAnimalInputObjectSchema),
            z.lazy(
              () => AnimalUncheckedUpdateWithoutSaleAnimalInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema =
  Schema;
