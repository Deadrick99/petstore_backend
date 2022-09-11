import { z } from 'zod';

export const RevisionScalarFieldEnumSchema = z.enum([
  'REVISIONID',
  'VERSION',
  'DESCRIPTION',
  'AUTHOR',
  'RELEASEDATE',
]);
