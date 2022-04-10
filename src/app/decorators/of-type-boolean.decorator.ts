import { coerceBooleanProperty } from "@angular/cdk/coercion";

export function OfTypeBoolean() {
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
        this[privateFieldName] = coerceBooleanProperty(value);
      },
    };
  };
}

export type BooleanInputType = "" | "true" | "false" | boolean;
