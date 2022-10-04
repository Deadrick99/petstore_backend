export function trim_nulls<T extends object>(obj: T): T {
  Object.keys(obj).forEach((key) => {
    if (obj[key as keyof typeof obj] === undefined || obj[key as keyof typeof obj] === null) {
      delete obj[key as keyof typeof obj];
    }
  });
  return obj;
}
