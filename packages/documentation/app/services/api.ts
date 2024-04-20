import { Instance } from "@arkyn/api";

const api = new Instance({
  base_url: "https://jsonplaceholder.typicode.com",
  inbox_flow: {
    channel_id: "0fb19075-8d0d-4b52-845c-9afbeeba56a3",
    user_token:
      "eyJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoibHVjYXNnb25jYWx2ZXNnaXRodWJAZ21haWwuY29tIiwiaWQiOiI4NTRkMTBiZS05OTQ5LTRmMjAtOTU5MS1lYWU4NGVkNDg2OGEiLCJpYXQiOjE3MTMzNzY3NjYsImlzcyI6InVybjpleGFtcGxlOmlzc3VlciIsImF1ZCI6InVybjpleGFtcGxlOmF1ZGllbmNlIiwiZXhwIjoxNzQ0OTM0MzY2fQ.Yk6SjDh382fIVewY_C3E36FHhS1J6kCXWYP6keb_ONA",
  },
});

export { api };
