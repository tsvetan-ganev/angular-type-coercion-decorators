import { coerceNumberProperty } from "@angular/cdk/coercion";

export function OfTypeNumber() {
  return function decorator(target: unknown, propertyKey: PropertyKey): any {
    const privateFieldName = `_${String(propertyKey)}`;

    Object.defineProperty(target, privateFieldName, {
      configurable: true,
      writable: true,
    });

    return {
      get() {
        return this[privateFieldName];
      },
      set(value: unknown) {
        this[privateFieldName] = coerceNumberProperty(value);
      },
    };
  };
}

export type NumberInputType = number | string;
