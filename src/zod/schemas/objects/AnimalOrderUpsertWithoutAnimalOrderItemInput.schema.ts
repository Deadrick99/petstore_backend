import { z } from 'zod';
import { AnimalOrderUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUpdateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUncheckedUpdateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateWithoutAnimalOrderItemInput.schema';
import { AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpsertWithoutAnimalOrderItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnimalOrderUpdateWithoutAnimalOrderItemInputObjectSchema),
      z.lazy(
        () => AnimalOrderUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => AnimalOrderCreateWithoutAnimalOrderItemInputObjectSchema),
      z.lazy(
        () => AnimalOrderUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const AnimalOrderUpsertWithoutAnimalOrderItemInputObjectSchema = Schema;
