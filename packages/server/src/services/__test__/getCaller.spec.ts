import { describe, expect, it } from "vitest";
import { getCaller } from "../getCaller";

describe("getCaller", () => {
  it("should return the correct caller function name and file path", () => {
    function testFunction() {
      return getCaller();
    }

    const result = testFunction();

    expect(result.functionName).toBe("testFunction");
    expect(result.callerInfo).toContain("getCaller.spec.ts");
  });

  it("should handle calls from anonymous functions", () => {
    const result = (() => getCaller())();

    expect(result.functionName).toBe("Unknown function");
    expect(result.callerInfo).toContain("getCaller.spec.ts");
  });

  it("should return the correct name for nested functions", () => {
    function outerFunction() {
      function innerFunction() {
        return getCaller();
      }
      return innerFunction();
    }

    const result = outerFunction();

    expect(result.functionName).toBe("innerFunction");
    expect(result.callerInfo).toContain("getCaller.spec.ts");
  });

  it("should return method name when called from object method", () => {
    const obj = {
      method() {
        return getCaller();
      },
    };

    const result = obj.method();

    expect(result.functionName).toMatch(/method|Object.method/);
    expect(result.callerInfo).toContain("getCaller.spec.ts");
  });

  it("should return method name when called from class method", () => {
    class TestClass {
      call() {
        return getCaller();
      }
    }

    const instance = new TestClass();
    const result = instance.call();

    expect(result.functionName).toMatch(/call|TestClass.call/);
    expect(result.callerInfo).toContain("getCaller.spec.ts");
  });

  it("should return the correct caller for indirect calls", () => {
    function intermediary(fn: () => any) {
      return fn();
    }

    function actualCaller() {
      return getCaller();
    }

    const result = intermediary(actualCaller);

    expect(result.functionName).toBe("actualCaller");
    expect(result.callerInfo).toContain("getCaller.spec.ts");
  });
});
