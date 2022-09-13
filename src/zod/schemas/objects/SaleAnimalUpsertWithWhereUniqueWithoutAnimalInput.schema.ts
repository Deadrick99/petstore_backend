import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalUpdateWithoutAnimalInputObjectSchema } from './SaleAnimalUpdateWithoutAnimalInput.schema';
import { SaleAnimalUncheckedUpdateWithoutAnimalInputObjectSchema } from './SaleAnimalUncheckedUpdateWithoutAnimalInput.schema';
import { SaleAnimalCreateWithoutAnimalInputObjectSchema } from './SaleAnimalCreateWithoutAnimalInput.schema';
import { SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpsertWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleAnimalUpdateWithoutAnimalInputObjectSchema),
        z.lazy(() => SaleAnimalUncheckedUpdateWithoutAnimalInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SaleAnimalCreateWithoutAnimalInputObjectSchema),
        z.lazy(() => SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema),
      ]),
    })
    .strict();

export const SaleAnimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
