import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  BuyGemsApiBody,
  BuyGemsApiResult,
  CancelSubscriptionApiResult,
  ChangeEmailApiBody,
  ChangeEmailApiResult,
  ChangePasswordApiBody,
  ChangePasswordApiResult,
  GetAccountDetailsApiResult,
  GetBankApiResult,
  GetBankItemsApiQuery,
  GetBankItemsApiResult,
  GetMyGemsHistoryApiResult,
  GetMyGrandExchangeHistoryApiRequest,
  GetMyGrandExchangeHistoryApiResult,
  GetMyGrandExchangeOrdersApiRequest,
  GetMyGrandExchangeOrdersApiResult,
  GetMyPurchaseHistoryApiResult,
  GetMySubscriptionApiResult,
  GetPendingItemsApiRequest,
  GetPendingItemsApiResult,
  GetRateLimitsApiResult,
  SubscribeWithMemberTokenApiResult,
  SubscribeWithStripeApiBody,
  SubscribeWithStripeApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMyAccountApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Fetch bank details. */
  public getBank(): Promise<GetBankApiResult> {
    return this.httpClient.get<GetBankApiResult>(`/my/bank`, {
      isSecure: true,
    });
  }

  /** Fetch all items in your bank. */
  public getBankItems(params: GetBankItemsApiQuery = {}): Promise<GetBankItemsApiResult> {
    return this.httpClient.get<GetBankItemsApiResult>(`/my/bank/items`, {
      query: params,
      isSecure: true,
    });
  }

  /** Fetch your orders details (sell and buy orders). */
  public getGrandExchangeOrders(
    params: GetMyGrandExchangeOrdersApiRequest = {},
  ): Promise<GetMyGrandExchangeOrdersApiResult> {
    return this.httpClient.get<GetMyGrandExchangeOrdersApiResult>(`/my/grandexchange/orders`, {
      query: params,
      isSecure: true,
    });
  }

  /** Fetch your transaction history of the last 7 days (buy and sell orders). */
  public getGrandExchangeHistory(
    params: GetMyGrandExchangeHistoryApiRequest = {},
  ): Promise<GetMyGrandExchangeHistoryApiResult> {
    return this.httpClient.get<GetMyGrandExchangeHistoryApiResult>(`/my/grandexchange/history`, {
      query: params,
      isSecure: true,
    });
  }

  /** Fetch account details. */
  public get(): Promise<GetAccountDetailsApiResult> {
    return this.httpClient.get<GetAccountDetailsApiResult>(`/my/details`, { isSecure: true });
  }

  /** Retrieve all unclaimed pending items for your account. */
  public getPendingItems(
    params: GetPendingItemsApiRequest = {},
  ): Promise<GetPendingItemsApiResult> {
    return this.httpClient.get<GetPendingItemsApiResult>(`/my/pending_items`, {
      query: params,
      isSecure: true,
    });
  }

  /** Get all rate limits. */
  public getRateLimits(): Promise<GetRateLimitsApiResult> {
    return this.httpClient.get<GetRateLimitsApiResult>(`/my/rates`, {
      isSecure: true,
    });
  }

  /** Change your account password. Changing the password reset the account token. */
  public changePassword(body: ChangePasswordApiBody): Promise<ChangePasswordApiResult> {
    return this.httpClient.post<ChangePasswordApiResult>(`/my/change_password`, {
      body,
      isSecure: true,
    });
  }

  /** Change your account email. */
  public changeEmail(body: ChangeEmailApiBody): Promise<ChangeEmailApiResult> {
    return this.httpClient.post<ChangeEmailApiResult>(`/my/change_email`, {
      body,
      isSecure: true,
    });
  }

  /** Get current subscription details. */
  public getSubscription(): Promise<GetMySubscriptionApiResult> {
    return this.httpClient.get<GetMySubscriptionApiResult>(`/my/subscription`, {
      isSecure: true,
    });
  }

  /** Subscribe to become a member and unlock the benefits tied to your selected plan.
   * You will receive a secure Stripe checkout URL to complete the payment. */
  public subscribeWithStripe(
    body: SubscribeWithStripeApiBody,
  ): Promise<SubscribeWithStripeApiResult> {
    return this.httpClient.post<SubscribeWithStripeApiResult>(`/my/subscribe/stripe`, {
      body,
      isSecure: true,
    });
  }

  /** Redeem a member token to start or extend membership by 30 days.
   * Member tokens are manually granted as rewards for events.
   * Member tokens cannot be redeemed while a Stripe subscription is active. */
  public subscribeWithMemberToken(): Promise<SubscribeWithMemberTokenApiResult> {
    return this.httpClient.post<SubscribeWithMemberTokenApiResult>(`/my/subscribe/member_token`, {
      isSecure: true,
    });
  }

  /** Cancel subscription at the end of the current billing period. */
  public cancelSubscription(): Promise<CancelSubscriptionApiResult> {
    return this.httpClient.post<CancelSubscriptionApiResult>(`/my/subscribe/cancel`, {
      isSecure: true,
    });
  }

  /** List all purchases (subscriptions and gem packs). */
  public getPurchaseHistory(): Promise<GetMyPurchaseHistoryApiResult> {
    return this.httpClient.get<GetMyPurchaseHistoryApiResult>(`/my/purchase_history`, {
      isSecure: true,
    });
  }

  /** List all gem credits and debits. */
  public getGemsHistory(): Promise<GetMyGemsHistoryApiResult> {
    return this.httpClient.get<GetMyGemsHistoryApiResult>(`/my/gems_history`, {
      isSecure: true,
    });
  }

  /** Purchase gems. Returns a Stripe checkout URL for payment. */
  public buyGems(body: BuyGemsApiBody): Promise<BuyGemsApiResult> {
    return this.httpClient.post<BuyGemsApiResult>(`/my/buy_gems`, {
      body,
      isSecure: true,
    });
  }
}
