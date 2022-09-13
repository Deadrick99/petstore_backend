import { z } from 'zod';
import { SaleAnimalScalarWhereInputObjectSchema } from './SaleAnimalScalarWhereInput.schema';
import { SaleAnimalUpdateManyMutationInputObjectSchema } from './SaleAnimalUpdateManyMutationInput.schema';
import { SaleAnimalUncheckedUpdateManyWithoutSaleAnimalInputObjectSchema } from './SaleAnimalUncheckedUpdateManyWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateManyWithWhereWithoutAnimalInput> =
  z
    .object({
      where: z.lazy(() => SaleAnimalScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleAnimalUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => SaleAnimalUncheckedUpdateManyWithoutSaleAnimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SaleAnimalUpdateManyWithWhereWithoutAnimalInputObjectSchema =
  Schema;
