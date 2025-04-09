import { describe, it, expect, vi, beforeEach } from "vitest";
import { inboxFlowRequest } from "../inboxFlowRequest";
import { InboxFlowInstance } from "../../config/inboxFlowInstance";
import { httpDebug } from "../../services/httpDebug";

vi.mock("../../config/inboxFlowInstance");
vi.mock("../../services/httpDebug");

global.fetch = vi.fn() as any;

describe("inboxFlowRequest", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should send a POST request with correct body and headers", async () => {
    const mockConfig = {
      status: 200,
      method: "POST" as any,
      request: "Request data",
      response: "Response data",
      token: "test-token",
    };

    const mockInboxConfig = {
      inboxChannelId: "channel-id",
      inboxUserToken: "user-token",
      inboxApiUrl: "https://api.example.com/inbox",
    };

    (InboxFlowInstance.getInboxConfig as any).mockReturnValue(mockInboxConfig);

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      status: 200,
    });

    await inboxFlowRequest(mockConfig);

    expect(fetch).toHaveBeenCalledWith(mockInboxConfig.inboxApiUrl, {
      method: "POST",
      body: JSON.stringify({
        status: mockConfig.status,
        channelId: mockInboxConfig.inboxChannelId,
        method: mockConfig.method,
        token: mockConfig.token,
        request: mockConfig.request,
        response: mockConfig.response,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mockInboxConfig.inboxUserToken}`,
      },
    });
  });

  it("should not send a request if inbox configuration is not set", async () => {
    (InboxFlowInstance.getInboxConfig as any).mockReturnValue(undefined);

    await inboxFlowRequest({
      status: 200,
      method: "POST",
      request: "Request data",
      response: "Response data",
      token: "test-token",
    });

    expect(fetch).not.toHaveBeenCalled();
  });

  it("should handle fetch errors gracefully", async () => {
    const mockConfig = {
      status: 500,
      method: "ERROR" as any,
      request: "Request data",
      response: "Error response",
      token: "test-token",
    };

    const mockInboxConfig = {
      inboxChannelId: "channel-id",
      inboxUserToken: "user-token",
      inboxApiUrl: "https://api.example.com/inbox",
    };

    (InboxFlowInstance.getInboxConfig as any).mockReturnValue(mockInboxConfig);

    (fetch as any).mockRejectedValueOnce(new Error("Network Error"));

    await inboxFlowRequest(mockConfig);

    expect(httpDebug).toHaveBeenCalledWith(
      "inboxFlowRequest",
      "Error sending inbox flow request",
      expect.any(Error)
    );
  });

  it("should not send a request in development environment", async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = "development";

    const mockConfig = {
      status: 200,
      method: "POST" as any,
      request: "Request data",
      response: "Response data",
      token: "test-token",
    };

    const mockInboxConfig = {
      inboxChannelId: "channel-id",
      inboxUserToken: "user-token",
      inboxApiUrl: "https://api.example.com/inbox",
    };

    (InboxFlowInstance.getInboxConfig as any).mockReturnValue(mockInboxConfig);

    await inboxFlowRequest(mockConfig);

    expect(fetch).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });
});
