import { z } from 'zod';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalUpdateWithoutAnimalInputObjectSchema } from './SaleAnimalUpdateWithoutAnimalInput.schema';
import { SaleAnimalUncheckedUpdateWithoutAnimalInputObjectSchema } from './SaleAnimalUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateWithWhereUniqueWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleAnimalUpdateWithoutAnimalInputObjectSchema),
        z.lazy(() => SaleAnimalUncheckedUpdateWithoutAnimalInputObjectSchema),
      ]),
    })
    .strict();

export const SaleAnimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema =
  Schema;
