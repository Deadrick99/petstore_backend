import { z } from 'zod';
import { MerchandiseWhereUniqueInputObjectSchema } from './objects/MerchandiseWhereUniqueInput.schema';
import { MerchandiseCreateInputObjectSchema } from './objects/MerchandiseCreateInput.schema';
import { MerchandiseUpdateInputObjectSchema } from './objects/MerchandiseUpdateInput.schema';

export const MerchandiseUpsertSchema = z.object({
  where: MerchandiseWhereUniqueInputObjectSchema,
  create: MerchandiseCreateInputObjectSchema,
  update: MerchandiseUpdateInputObjectSchema,
});
