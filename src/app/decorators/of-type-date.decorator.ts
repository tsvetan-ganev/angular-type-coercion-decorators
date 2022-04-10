import { coercionDecoratorFactory } from "./coercion-decorator-factory";

export function OfTypeDate() {
  return coercionDecoratorFactory<Date>((date: unknown) => {
    // pretty naive date parsing, don't use in production!
    if (date instanceof Date) {
      return date;
    } else if (typeof date === "string") {
      if (Number.isInteger(Number(date))) {
        return new Date(Number(date));
      }

      return new Date(Date.parse(date));
    } else if (typeof date === "number") {
      return new Date(date);
    }

    return new Date();
  });
}

export type DateInputType = string | number | Date;
