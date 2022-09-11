import { z } from 'zod';
import { autonumberWhereUniqueInputObjectSchema } from './objects/autonumberWhereUniqueInput.schema';
import { autonumberCreateInputObjectSchema } from './objects/autonumberCreateInput.schema';
import { autonumberUpdateInputObjectSchema } from './objects/autonumberUpdateInput.schema';

export const autonumberUpsertSchema = z.object({
  where: autonumberWhereUniqueInputObjectSchema,
  create: autonumberCreateInputObjectSchema,
  update: autonumberUpdateInputObjectSchema,
});
