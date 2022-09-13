import { z } from 'zod';
import { AnimalCreateWithoutSaleAnimalInputObjectSchema } from './AnimalCreateWithoutSaleAnimalInput.schema';
import { AnimalUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './AnimalUncheckedCreateWithoutSaleAnimalInput.schema';
import { AnimalCreateOrConnectWithoutSaleAnimalInputObjectSchema } from './AnimalCreateOrConnectWithoutSaleAnimalInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalCreateNestedOneWithoutSaleAnimalInput> =
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
        connect: z.lazy(() => AnimalWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema = Schema;
