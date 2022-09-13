import { z } from 'zod';
import { AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderCreateOrConnectWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateOrConnectWithoutAnimalOrderItemInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderCreateNestedOneWithoutAnimalOrderItemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema,
            ),
            z.lazy(
              () =>
                AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () =>
              AnimalOrderCreateOrConnectWithoutAnimalOrderItemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => AnimalOrderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const AnimalOrderCreateNestedOneWithoutAnimalOrderItemInputObjectSchema =
  Schema;
