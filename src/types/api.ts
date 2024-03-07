import { AxiosRequestConfig } from "axios";

type ApiEndpoints = [
  {
    uri: "/simple/price";
    response: Record<string, Record<string, number>>;
    parms: { ids: string; vs_currencies: string; include_24hr_change: boolean };
  },
  {
    uri: "/search/trending";
    response: {
      coins: Array<{
        item: {
          id: string;
          name: string;
          symbol: string;
          thumb: string;
          data: {
            price: string;
            sparkline: string;
            price_change_percentage_24h: { usd: number };
          };
        };
      }>;
    };
  },
  {
    uri: `/coins/${string}`;
    response: {
      id: string;
      symbol: string;
      name: string;
      description: { en: string };
      image: { thumb: string };
      market_data: { current_price: { usd: string } };
    };
  }
];

export type ApiEndpoint = ApiEndpoints[number]["uri"];

type EndpointByUri<T extends ApiEndpoint> = Extract<
  ApiEndpoints[number],
  { uri: T }
>;

export type ApiResponse<T extends ApiEndpoint> = EndpointByUri<T>["response"];

export type ApiParams<T extends ApiEndpoint> = EndpointByUri<T> extends {
  params: object;
}
  ? EndpointByUri<T>["params"]
  : never;

type BaseApiCallConfig = {
  method?: "get" | "post" | "put" | "delete";
};

export type ApiCallConfig<T extends ApiEndpoint> = BaseApiCallConfig &
  (ApiParams<T> extends undefined
    ? AxiosRequestConfig
    : Omit<AxiosRequestConfig, "params"> & { params: ApiParams<T> });
