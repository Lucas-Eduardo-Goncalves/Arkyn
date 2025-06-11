import { describe, it, expect } from "vitest";
import { ArkynLogInstance } from "../arkynLogInstance";

describe("ArkynLogInstance", () => {
  it("should set the arkyn configuration if not already set", () => {
    const arkynConfig = {
      arkynTrafficSourceId: "channel-123",
      arkynUserToken: "user-token-abc",
      arkynLogBaseApiUrl: "https://custom-arkyn-api.com",
    };

    ArkynLogInstance.setArkynConfig(arkynConfig);

    const config = ArkynLogInstance.getArkynConfig();
    expect(config).toEqual({
      arkynTrafficSourceId: "channel-123",
      arkynUserToken: "user-token-abc",
      arkynApiUrl:
        "https://custom-arkyn-api.com/http-traffic-records/:trafficSourceId",
    });
  });

  it("should not overwrite the arkyn configuration if already set", () => {
    const initialConfig = {
      arkynTrafficSourceId: "channel-123",
      arkynUserToken: "user-token-abc",
      arkynLogBaseApiUrl: "https://custom-arkyn-api.com",
    };

    const newConfig = {
      arkynTrafficSourceId: "channel-456",
      arkynUserToken: "user-token-def",
      arkynLogBaseApiUrl: "https://another-arkyn-api.com",
    };

    ArkynLogInstance.setArkynConfig(initialConfig);
    ArkynLogInstance.setArkynConfig(newConfig);

    const config = ArkynLogInstance.getArkynConfig();
    expect(config).toEqual({
      arkynTrafficSourceId: "channel-123",
      arkynUserToken: "user-token-abc",
      arkynApiUrl:
        "https://custom-arkyn-api.com/http-traffic-records/:trafficSourceId",
    });
  });

  it("should return undefined if no configuration is set", () => {
    ArkynLogInstance.resetArkynConfig();

    const config = ArkynLogInstance.getArkynConfig();
    expect(config).toBeUndefined();
  });

  it("should use the default API URL if none is provided", () => {
    const arkynConfig = {
      arkynTrafficSourceId: "channel-123",
      arkynUserToken: "user-token-abc",
    };

    const defaultArkynURL = `https://logs-arkyn-flow-logs.vw6wo7.easypanel.host/http-traffic-records/:trafficSourceId`;

    ArkynLogInstance.setArkynConfig(arkynConfig);

    const config = ArkynLogInstance.getArkynConfig();
    console.log(config);
    expect(config).toEqual({
      ...arkynConfig,
      arkynApiUrl: defaultArkynURL,
    });
  });
});
