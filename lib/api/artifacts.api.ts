import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import { ArtifactsApiParams } from './types/artifacts-api.types';
import { ArtifactsMyCharactersApi } from './artifacts-my-characters.api';
import { ArtifactsCharactersApi } from './artifacts-characters.api';
import { ArtifactsMyAccountApi } from './artifacts-my-account.api';
import { ArtifactsMapsApi } from './artifacts-maps.api';
import { ArtifactsItemsApi } from './artifacts-items.api';
import { ArtifactsMonstersApi } from './artifacts-monsters.api';
import { ArtifactsResourcesApi } from './artifacts-resources.api';
import { ArtifactsEventsApi } from './artifacts-events.api';
import { ArtifactsGrandExchangeApi } from './artifacts-grand-exchange.api';
import { ArtifactsAccountsApi } from './artifacts-accounts.api';
import { ArtifactsTokenApi } from './artifacts-token.api';
import { GetServerDetailsApiResult } from './types/api-schema-bindings.types';
import { ArtifactsLeaderboardApi } from './artifacts-leaderboard.api';
import { ArtifactsAchievementsApi } from './artifacts-achievements.api';
import { ArtifactsBadgesApi } from './artifacts-badges.api';
import { ArtifactsEffectsApi } from './artifacts-effects.api';
import { ArtifactsNpcsApi } from './artifacts-npcs.api';
import { ArtifactsTasksApi } from './artifacts-tasks.api';
import { ArtifactsSimulationApi } from './artifacts-simulation.api';
import { ArtifactsSkinsApi } from './artifacts-skins.api';
import { ArtifactsSeasonRewardsApi } from './artifacts-season-rewards.api';
import { ArtifactsRaidsApi } from './artifacts-raids.api';
import { ArtifactsGemsShopApi } from './artifacts-gems-shop.api';
import { ArtifactsGameAssistantApi } from './artifacts-game-assistant.api';

export class ArtifactsApi {
  public readonly myAccount: ArtifactsMyAccountApi;
  public readonly myCharacters: ArtifactsMyCharactersApi;
  public readonly accounts: ArtifactsAccountsApi;
  public readonly achievements: ArtifactsAchievementsApi;
  public readonly badges: ArtifactsBadgesApi;
  public readonly skins: ArtifactsSkinsApi;
  public readonly seasonRewards: ArtifactsSeasonRewardsApi;
  public readonly characters: ArtifactsCharactersApi;
  public readonly effects: ArtifactsEffectsApi;
  public readonly events: ArtifactsEventsApi;
  public readonly grandExchange: ArtifactsGrandExchangeApi;
  public readonly items: ArtifactsItemsApi;
  public readonly leaderboard: ArtifactsLeaderboardApi;
  public readonly maps: ArtifactsMapsApi;
  public readonly monsters: ArtifactsMonstersApi;
  public readonly npcs: ArtifactsNpcsApi;
  public readonly raids: ArtifactsRaidsApi;
  public readonly resources: ArtifactsResourcesApi;
  public readonly tasks: ArtifactsTasksApi;
  public readonly simulation: ArtifactsSimulationApi;
  public readonly token: ArtifactsTokenApi;
  public readonly gemsShop: ArtifactsGemsShopApi;
  public readonly gameAssistant: ArtifactsGameAssistantApi;

  protected constructor(private readonly httpClient: ArtifactsHttpClient) {
    this.myAccount = new ArtifactsMyAccountApi(httpClient);
    this.myCharacters = new ArtifactsMyCharactersApi(httpClient);
    this.accounts = new ArtifactsAccountsApi(httpClient);
    this.achievements = new ArtifactsAchievementsApi(httpClient);
    this.badges = new ArtifactsBadgesApi(httpClient);
    this.skins = new ArtifactsSkinsApi(httpClient);
    this.seasonRewards = new ArtifactsSeasonRewardsApi(httpClient);
    this.characters = new ArtifactsCharactersApi(httpClient);
    this.effects = new ArtifactsEffectsApi(httpClient);
    this.events = new ArtifactsEventsApi(httpClient);
    this.grandExchange = new ArtifactsGrandExchangeApi(httpClient);
    this.items = new ArtifactsItemsApi(httpClient);
    this.leaderboard = new ArtifactsLeaderboardApi(httpClient);
    this.maps = new ArtifactsMapsApi(httpClient);
    this.monsters = new ArtifactsMonstersApi(httpClient);
    this.npcs = new ArtifactsNpcsApi(httpClient);
    this.raids = new ArtifactsRaidsApi(httpClient);
    this.resources = new ArtifactsResourcesApi(httpClient);
    this.tasks = new ArtifactsTasksApi(httpClient);
    this.simulation = new ArtifactsSimulationApi(httpClient);
    this.token = new ArtifactsTokenApi(httpClient);
    this.gemsShop = new ArtifactsGemsShopApi(httpClient);
    this.gameAssistant = new ArtifactsGameAssistantApi(httpClient);
  }

  public static create(params: ArtifactsApiParams = {}): ArtifactsApi {
    const httpClient = new ArtifactsHttpClient(
      params.baseUrl ?? 'https://api.artifactsmmo.com',
      params.token ?? '',
    );
    return new ArtifactsApi(httpClient);
  }

  public getStatus(): Promise<GetServerDetailsApiResult> {
    return this.httpClient.get<GetServerDetailsApiResult>('/');
  }

  public setToken(token: string): void {
    this.httpClient.setToken(token);
  }
}
