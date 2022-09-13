import { z } from 'zod';
import { AutoNumberUpdateManyMutationInputObjectSchema } from './objects/AutoNumberUpdateManyMutationInput.schema';
import { AutoNumberWhereInputObjectSchema } from './objects/AutoNumberWhereInput.schema';

export const AutoNumberUpdateManySchema = z.object({
  data: AutoNumberUpdateManyMutationInputObjectSchema,
  where: AutoNumberWhereInputObjectSchema.optional(),
});
