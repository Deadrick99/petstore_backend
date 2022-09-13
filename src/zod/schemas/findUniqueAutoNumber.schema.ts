import { z } from 'zod';
import { AutoNumberWhereUniqueInputObjectSchema } from './objects/AutoNumberWhereUniqueInput.schema';

export const AutoNumberFindUniqueSchema = z.object({
  where: AutoNumberWhereUniqueInputObjectSchema,
});
