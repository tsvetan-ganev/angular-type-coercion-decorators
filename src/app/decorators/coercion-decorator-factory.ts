export function coercionDecoratorFactory<ReturnType>(
  coercionFunc: (value: unknown) => ReturnType
) {
  return function (target: unknown, propertyKey: PropertyKey): any {
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
        this[privateFieldName] = coercionFunc(value);
      },
    };
  };
}
