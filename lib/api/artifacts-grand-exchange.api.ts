import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetGeHistoryApiQuery,
  GetGeHistoryApiResult,
  GetGeOrderApiResult,
  GetGeOrdersApiQuery,
  GetGeOrdersApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsGrandExchangeApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch the sales history of the item for the last 7 days (buy and sell orders). */
  public getHistory(
    code: string,
    params: GetGeHistoryApiQuery = {},
  ): Promise<GetGeHistoryApiResult> {
    return this.httpClient.get<GetGeHistoryApiResult>(`/grandexchange/history/${code}`, {
      query: params,
    });
  }

  /** Fetch all sell orders (sell and buy orders).
 
    Use the type parameter to filter by order type;
    when using account, type is required to keep account searches explicit.*/
  public getAll(params: GetGeOrdersApiQuery = {}): Promise<GetGeOrdersApiResult> {
    return this.httpClient.get<GetGeOrdersApiResult>('/grandexchange/orders', {
      query: params,
    });
  }

  /** Retrieve a specific order by ID. */
  public get(id: string): Promise<GetGeOrderApiResult> {
    return this.httpClient.get<GetGeOrderApiResult>(`/grandexchange/orders/${id}`);
  }
}
