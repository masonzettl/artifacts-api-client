import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllTasksApiQuery,
  GetAllTasksApiResult,
  GetAllTasksRewardsApiQuery,
  GetAllTasksRewardsApiResult,
  GetTaskApiResult,
  GetTasksRewardApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsTasksApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch the list of all tasks. */
  public getAll(params: GetAllTasksApiQuery = {}): Promise<GetAllTasksApiResult> {
    return this.httpClient.get<GetAllTasksApiResult>(`/tasks/list`, {
      query: params,
    });
  }

  /** Retrieve the details of a task. */
  public get(code: string): Promise<GetTaskApiResult> {
    return this.httpClient.get<GetTaskApiResult>(`/tasks/list/${code}`);
  }

  /** Fetch the list of all tasks rewards. To obtain these rewards, you must exchange 6 task coins with a tasks master. */
  public getAllRewards(
    params: GetAllTasksRewardsApiQuery = {},
  ): Promise<GetAllTasksRewardsApiResult> {
    return this.httpClient.get<GetAllTasksRewardsApiResult>(`/tasks/rewards`, {
      query: params,
    });
  }

  /** Retrieve the details of a tasks reward. */
  public getReward(code: string): Promise<GetTasksRewardApiResult> {
    return this.httpClient.get<GetTasksRewardApiResult>(`/tasks/rewards/${code}`);
  }
}
