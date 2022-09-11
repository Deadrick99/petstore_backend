import { z } from 'zod';
import { autonumberWhereUniqueInputObjectSchema } from './objects/autonumberWhereUniqueInput.schema';

export const autonumberFindUniqueSchema = z.object({
  where: autonumberWhereUniqueInputObjectSchema,
});
