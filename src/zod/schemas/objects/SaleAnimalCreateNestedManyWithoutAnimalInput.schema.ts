import { z } from 'zod';
import { SaleAnimalCreateWithoutAnimalInputObjectSchema } from './SaleAnimalCreateWithoutAnimalInput.schema';
import { SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutAnimalInput.schema';
import { SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema } from './SaleAnimalCreateOrConnectWithoutAnimalInput.schema';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateNestedManyWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleAnimalCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => SaleAnimalCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () => SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema,
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
              () => SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema,
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
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleAnimalCreateNestedManyWithoutAnimalInputObjectSchema = Schema;
