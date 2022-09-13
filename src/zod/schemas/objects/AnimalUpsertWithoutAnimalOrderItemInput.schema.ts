import { z } from 'zod';
import { AnimalUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUpdateWithoutAnimalOrderItemInput.schema';
import { AnimalUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUncheckedUpdateWithoutAnimalOrderItemInput.schema';
import { AnimalCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateWithoutAnimalOrderItemInput.schema';
import { AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema } from './AnimalUncheckedCreateWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpsertWithoutAnimalOrderItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnimalUpdateWithoutAnimalOrderItemInputObjectSchema),
      z.lazy(
        () => AnimalUncheckedUpdateWithoutAnimalOrderItemInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => AnimalCreateWithoutAnimalOrderItemInputObjectSchema),
      z.lazy(
        () => AnimalUncheckedCreateWithoutAnimalOrderItemInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const AnimalUpsertWithoutAnimalOrderItemInputObjectSchema = Schema;
