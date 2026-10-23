import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  BuyCustomDesignApiBody,
  BuyCustomDesignApiResult,
  BuySkinApiBody,
  BuySkinApiResult,
  BuySpawnEventApiBody,
  BuySpawnEventApiResult,
  BuyGemShopSubscriptionApiResult,
  GetCatalogApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsGemsShopApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Return the gems shop catalog. */
  public get(): Promise<GetCatalogApiResult> {
    return this.httpClient.get<GetCatalogApiResult>(`/gems_shop/`);
  }

  /** Buy a skin from the gems shop using gems. */
  public buySkin(code: string): Promise<BuySkinApiResult> {
    const body: BuySkinApiBody = { code };
    return this.httpClient.post<BuySkinApiResult>(`/gems_shop/skin`, {
      body,
      isSecure: true,
    });
  }

  /** Spawn an event from the gems shop using gems. */
  public buySpawnEvent(code: string): Promise<BuySpawnEventApiResult> {
    const body: BuySpawnEventApiBody = { code };
    return this.httpClient.post<BuySpawnEventApiResult>(`/gems_shop/spawn_event`, {
      body,
      isSecure: true,
    });
  }

  /** Buy or extend membership by 30 days using gems. Unavailable while a Stripe subscription is active. */
  public buySubscription(): Promise<BuyGemShopSubscriptionApiResult> {
    return this.httpClient.post<BuyGemShopSubscriptionApiResult>(`/gems_shop/subscription`, {
      isSecure: true,
    });
  }

  /** Buy a custom design using gems. */
  public buyCustomDesign(code: string): Promise<BuyCustomDesignApiResult> {
    const body: BuyCustomDesignApiBody = { code };
    return this.httpClient.post<BuyCustomDesignApiResult>(`/gems_shop/buy_custom_design`, {
      body,
      isSecure: true,
    });
  }
}
