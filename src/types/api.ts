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
      market_cap_rank: number;
      market_data: {
         current_price: { usd: number };
         ath: { usd: number};
         ath_change_percentage: { usd: number};
         ath_date: { usd: string};
         atl: { usd: number};
         atl_change_percentage: { usd: number};
         atl_date: { usd: string};
         market_cap: { usd: number};
         total_volume: { usd: number};
         high_24h: { usd: number};
         low_24h: { usd: number};
         market_cap_change_percentage_24h: number;

      };
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
