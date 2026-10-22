import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  GetAllSkinsApiQuery,
  GetAllSkinsApiResult,
  GetSkinApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsSkinsApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** List of all skins available in the game. */
  public getAll(params: GetAllSkinsApiQuery): Promise<GetAllSkinsApiResult> {
    return this.httpClient.get<GetAllSkinsApiResult>(`/skins`, {
      query: params,
    });
  }

  /** Retrieve the details of a skin. */
  public get(code: string): Promise<GetSkinApiResult> {
    return this.httpClient.get<GetSkinApiResult>(`/skins/${code}`);
  }
}
