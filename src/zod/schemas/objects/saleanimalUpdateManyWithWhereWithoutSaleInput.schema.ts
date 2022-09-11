import { z } from 'zod';
import { saleanimalScalarWhereInputObjectSchema } from './saleanimalScalarWhereInput.schema';
import { saleanimalUpdateManyMutationInputObjectSchema } from './saleanimalUpdateManyMutationInput.schema';
import { saleanimalUncheckedUpdateManyWithoutSaleanimalInputObjectSchema } from './saleanimalUncheckedUpdateManyWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateManyWithWhereWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => saleanimalScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => saleanimalUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => saleanimalUncheckedUpdateManyWithoutSaleanimalInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const saleanimalUpdateManyWithWhereWithoutSaleInputObjectSchema = Schema;
