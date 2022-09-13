import { z } from 'zod';
import { AutoNumberWhereUniqueInputObjectSchema } from './objects/AutoNumberWhereUniqueInput.schema';
import { AutoNumberCreateInputObjectSchema } from './objects/AutoNumberCreateInput.schema';
import { AutoNumberUpdateInputObjectSchema } from './objects/AutoNumberUpdateInput.schema';

export const AutoNumberUpsertSchema = z.object({
  where: AutoNumberWhereUniqueInputObjectSchema,
  create: AutoNumberCreateInputObjectSchema,
  update: AutoNumberUpdateInputObjectSchema,
});
