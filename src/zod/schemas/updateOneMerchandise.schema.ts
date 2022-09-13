import { z } from 'zod';
import { MerchandiseUpdateInputObjectSchema } from './objects/MerchandiseUpdateInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './objects/MerchandiseWhereUniqueInput.schema';

export const MerchandiseUpdateOneSchema = z.object({
  data: MerchandiseUpdateInputObjectSchema,
  where: MerchandiseWhereUniqueInputObjectSchema,
});
