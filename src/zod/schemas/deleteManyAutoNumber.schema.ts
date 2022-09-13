import { z } from 'zod';
import { AutoNumberWhereInputObjectSchema } from './objects/AutoNumberWhereInput.schema';

export const AutoNumberDeleteManySchema = z.object({
  where: AutoNumberWhereInputObjectSchema.optional(),
});
