import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  AskGameAssistantApiBody,
  AskGameAssistantApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsGameAssistantApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Ask the game assistant a question about game mechanics or public API usage.
   * An active membership is required.
   * Members receive a limited number of free questions per day.
   * When no free question is available, the request can spend 1 gem with pay_with_gems=true. */
  public ask(body: AskGameAssistantApiBody): Promise<AskGameAssistantApiResult> {
    return this.httpClient.post<AskGameAssistantApiResult>(`/game_assistant/ask`, {
      body,
      isSecure: true,
    });
  }
}
