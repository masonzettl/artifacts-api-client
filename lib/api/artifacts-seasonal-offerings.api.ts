import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { GetDailySeasonalOfferingsApiResult } from './types/api-schema-bindings.types';

export class ArtifactsSeasonalOfferingsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Return the worldwide seasonal offerings available for the current UTC day. */
  public get(): Promise<GetDailySeasonalOfferingsApiResult> {
    return this.httpClient.get<GetDailySeasonalOfferingsApiResult>(`/seasonal_offerings`);
  }
}
