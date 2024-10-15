async function extractJsonFromRequest(req: Request): Promise<any> {
  let data: any;

  try {
    const arrayBuffer = await req.arrayBuffer();
    const text = new TextDecoder().decode(arrayBuffer);

    try {
      data = JSON.parse(text);
    } catch (jsonError) {
      try {
        const formData = new URLSearchParams(text);
        data = Object.fromEntries(formData.entries());
      } catch (formDataError) {
        console.error("Failed to extract data from request:", {
          jsonError,
          formDataError,
        });
        data = {};
      }
    }
  } catch (error) {
    console.error("Failed to read request body:", error);
    data = {};
  }

  return data;
}

export { extractJsonFromRequest };
