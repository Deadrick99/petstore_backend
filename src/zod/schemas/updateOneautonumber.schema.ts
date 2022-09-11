import { z } from 'zod';
import { autonumberUpdateInputObjectSchema } from './objects/autonumberUpdateInput.schema';
import { autonumberWhereUniqueInputObjectSchema } from './objects/autonumberWhereUniqueInput.schema';

export const autonumberUpdateOneSchema = z.object({
  data: autonumberUpdateInputObjectSchema,
  where: autonumberWhereUniqueInputObjectSchema,
});
