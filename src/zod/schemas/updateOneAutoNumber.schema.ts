import { z } from 'zod';
import { AutoNumberUpdateInputObjectSchema } from './objects/AutoNumberUpdateInput.schema';
import { AutoNumberWhereUniqueInputObjectSchema } from './objects/AutoNumberWhereUniqueInput.schema';

export const AutoNumberUpdateOneSchema = z.object({
  data: AutoNumberUpdateInputObjectSchema,
  where: AutoNumberWhereUniqueInputObjectSchema,
});
