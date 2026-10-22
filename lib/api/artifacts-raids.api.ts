import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllRaidsApiQuery,
  GetAllRaidsApiResult,
  GetRaidApiResult,
  GetRaidLeaderboardApiQuery,
  GetRaidLeaderboardApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsRaidsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch the list of all raids. */
  public getAll(params: GetAllRaidsApiQuery): Promise<GetAllRaidsApiResult> {
    return this.httpClient.get<GetAllRaidsApiResult>(`/raids`, {
      query: params,
    });
  }

  /** Retrieve the details of a specific raid. */
  public get(code: string): Promise<GetRaidApiResult> {
    return this.httpClient.get<GetRaidApiResult>(`/raids/${code}`);
  }

  /** Retrieve the leaderboard for the active or latest raid instance. */
  public getLeaderboard(
    code: string,
    params: GetRaidLeaderboardApiQuery,
  ): Promise<GetRaidLeaderboardApiResult> {
    return this.httpClient.get<GetRaidLeaderboardApiResult>(`/raids/${code}/leaderboard`, {
      query: params,
    });
  }
}
