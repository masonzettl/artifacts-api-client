import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllSeasonRewardsApiQuery,
  GetAllSeasonRewardsApiResult,
  GetSeasonRewardsByCodeApiQuery,
  GetSeasonRewardsByCodeApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsSeasonRewardsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** List of all rewards for the current season. */
  public get(params: GetAllSeasonRewardsApiQuery): Promise<GetAllSeasonRewardsApiResult> {
    return this.httpClient.get<GetAllSeasonRewardsApiResult>(`/season_rewards`, {
      query: params,
    });
  }

  /** List all season rewards matching a specific code. */
  public getByCode(
    code: string,
    params: GetSeasonRewardsByCodeApiQuery,
  ): Promise<GetSeasonRewardsByCodeApiResult> {
    return this.httpClient.get<GetSeasonRewardsByCodeApiResult>(`/skins/${code}`, {
      query: params,
    });
  }
}
