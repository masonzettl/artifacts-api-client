import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  CraftingApiBody,
  CraftingApiResult,
  DepositBankItemApiBody,
  DepositBankGoldApiBody,
  DepositBankGoldApiResult,
  DepositBankItemApiResult,
  EquipItemsApiBody,
  EquipItemsApiResult,
  FightApiResult,
  GatheringApiResult,
  MoveApiBody,
  MoveApiResult,
  UnequipItemsApiBody,
  UnequipItemsApiResult,
  WithdrawBankItemApiBody,
  WithdrawBankItemApiResult,
  WithdrawBankGoldApiBody,
  WithdrawBankGoldApiResult,
  RecyclingApiBody,
  RecyclingApiResult,
  BuyGrandExchangeItemApiBody,
  BuyGrandExchangeItemApiResult,
  CreateGrandExchangeSellOrderApiBody,
  CreateGrandExchangeSellOrderApiResult,
  DeleteItemApiBody,
  DeleteItemApiResult,
  AcceptTaskApiResult,
  CompleteTaskApiResult,
  ExchangeTaskApiResult,
  GetAllLogsApiResult,
  GetAllLogsApiQuery,
  GetMyCharactersApiResult,
  CancelTaskApiResult,
  BuyExpansionApiResult,
  TransitionApiResult,
  RestApiResult,
  UseItemApiBody,
  UseItemApiResult,
  FightApiBody,
  NpcBuyItemApiBody,
  NpcBuyItemApiResult,
  NpcSellItemApiBody,
  NpcSellItemApiResult,
  CancelGrandExchangeOrderApiBody,
  CancelGrandExchangeOrderApiResult,
  TradeTaskItemApiBody,
  TradeTaskItemApiResult,
  GiveGoldApiBody,
  GiveGoldApiResult,
  GiveItemsApiBody,
  GiveItemsApiResult,
  ChangeSkinApiBody,
  ChangeSkinApiResult,
  GetLogsApiQuery,
  GetLogsApiResult,
  CreateGrandExchangeBuyOrderApiBody,
  CreateGrandExchangeBuyOrderApiResult,
  FillGrandExchangeApiBody,
  FillGrandExchangeApiResult,
  ClaimPendingItemApiResult,
  RenameApiBody,
  RenameApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMyCharactersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Moves a character on the map using the map's X and Y position. */
  public move(name: string, body: MoveApiBody): Promise<MoveApiResult> {
    return this.httpClient.post<MoveApiResult>(`/my/${name}/action/move`, { body, isSecure: true });
  }

  /** Execute a transition from the current map to another layer.
   * The character must be on a map that has a transition available. */
  public transition(name: string): Promise<TransitionApiResult> {
    return this.httpClient.post<TransitionApiResult>(`/my/${name}/action/transition`, {
      isSecure: true,
    });
  }

  /** Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds) */
  public rest(name: string): Promise<RestApiResult> {
    return this.httpClient.post<RestApiResult>(`/my/${name}/action/rest`, { isSecure: true });
  }

  /** Equip multiple items on your character.
   * The cooldown will be 3 seconds multiplied by the number of different items equipped. */
  public equipItems(name: string, body: EquipItemsApiBody): Promise<EquipItemsApiResult> {
    return this.httpClient.post<EquipItemsApiResult>(`/my/${name}/action/equip`, {
      body,
      isSecure: true,
    });
  }

  /** Unequip multiple items on your character.
   * The cooldown will be 3 seconds multiplied by the number of different items unequipped. */
  public unequipItems(name: string, body: UnequipItemsApiBody): Promise<UnequipItemsApiResult> {
    return this.httpClient.post<UnequipItemsApiResult>(`/my/${name}/action/unequip`, {
      body,
      isSecure: true,
    });
  }

  /** Use an item as a consumable. */
  public useItem(name: string, body: UseItemApiBody): Promise<UseItemApiResult> {
    return this.httpClient.post<UseItemApiResult>(`/my/${name}/action/use`, {
      body,
      isSecure: true,
    });
  }

  /** Start a fight against a monster on the character's map. */
  public fight(name: string, body?: FightApiBody): Promise<FightApiResult> {
    return this.httpClient.post<FightApiResult>(`/my/${name}/action/fight`, {
      body,
      isSecure: true,
    });
  }

  /** Harvest a resource on the character's map. */
  public gathering(name: string): Promise<GatheringApiResult> {
    return this.httpClient.post<GatheringApiResult>(`/my/${name}/action/gathering`, {
      isSecure: true,
    });
  }

  /** Crafting an item. The character must be on a map with a workshop. */
  public crafting(name: string, body: CraftingApiBody): Promise<CraftingApiResult> {
    return this.httpClient.post<CraftingApiResult>(`/my/${name}/action/crafting`, {
      body,
      isSecure: true,
    });
  }

  /** Deposit golds in a bank on the character's map. */
  public depositBankGold(
    name: string,
    body: DepositBankGoldApiBody,
  ): Promise<DepositBankGoldApiResult> {
    return this.httpClient.post<DepositBankGoldApiResult>(`/my/${name}/action/bank/deposit/gold`, {
      body,
      isSecure: true,
    });
  }

  /** Deposit multiple items in a bank on the character's map.
   * The cooldown will be 3 seconds multiplied by the number of different items deposited. */
  public depositBankItem(
    name: string,
    body: DepositBankItemApiBody,
  ): Promise<DepositBankItemApiResult> {
    return this.httpClient.post<DepositBankItemApiResult>(`/my/${name}/action/bank/deposit/item`, {
      body,
      isSecure: true,
    });
  }

  /** Take items from your bank and put them in the character's inventory.
   * The cooldown will be 3 seconds multiplied by the number of different items withdrawn. */
  public withdrawBankItem(
    name: string,
    body: WithdrawBankItemApiBody,
  ): Promise<WithdrawBankItemApiResult> {
    return this.httpClient.post<WithdrawBankItemApiResult>(
      `/my/${name}/action/bank/withdraw/item`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Withdraw gold from your bank. */
  public withdrawBankGold(
    name: string,
    body: WithdrawBankGoldApiBody,
  ): Promise<WithdrawBankGoldApiResult> {
    return this.httpClient.post<WithdrawBankGoldApiResult>(
      `/my/${name}/action/bank/withdraw/gold`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Buy a 20 slots bank expansion. */
  public buyBankExpansion(name: string): Promise<BuyExpansionApiResult> {
    return this.httpClient.post<BuyExpansionApiResult>(`/my/${name}/action/bank/buy_expansion`, {
      isSecure: true,
    });
  }

  /** Buy an item from an NPC on the character's map. */
  public buyNpcItem(name: string, body: NpcBuyItemApiBody): Promise<NpcBuyItemApiResult> {
    return this.httpClient.post<NpcBuyItemApiResult>(`/my/${name}/action/npc/buy`, {
      body,
      isSecure: true,
    });
  }

  /** Sell an item to an NPC on the character's map. */
  public sellNpcItem(name: string, body: NpcSellItemApiBody): Promise<NpcSellItemApiResult> {
    return this.httpClient.post<NpcSellItemApiResult>(`/my/${name}/action/npc/sell`, {
      body,
      isSecure: true,
    });
  }

  /** Recycling an item. The character must be on a map with a workshop (only for equipments and weapons). */
  public recycling(name: string, body: RecyclingApiBody): Promise<RecyclingApiResult> {
    return this.httpClient.post<RecyclingApiResult>(`/my/${name}/action/recycling`, {
      body,
      isSecure: true,
    });
  }

  /** Buy an item at the Grand Exchange on the character's map. */
  public buyGrandExchangeItem(
    name: string,
    body: BuyGrandExchangeItemApiBody,
  ): Promise<BuyGrandExchangeItemApiResult> {
    return this.httpClient.post<BuyGrandExchangeItemApiResult>(
      `/my/${name}/action/grandexchange/buy`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Create a sell order at the Grand Exchange on the character's map. */
  public createGrandExchangeSellOrder(
    name: string,
    body: CreateGrandExchangeSellOrderApiBody,
  ): Promise<CreateGrandExchangeSellOrderApiResult> {
    return this.httpClient.post<CreateGrandExchangeSellOrderApiResult>(
      `/my/${name}/action/grandexchange/create_sell_order`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Cancel an order (sell or buy) at the Grand Exchange on the character's map.

    For sell orders: Items are returned to your inventory.
    For buy orders: Gold is refunded to your character. */
  public cancelGrandExchangeOrder(
    name: string,
    body: CancelGrandExchangeOrderApiBody,
  ): Promise<CancelGrandExchangeOrderApiResult> {
    return this.httpClient.post<CancelGrandExchangeOrderApiResult>(
      `/my/${name}/action/grandexchange/cancel`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Create a buy order at the Grand Exchange on the character's map.

    The total gold (price * quantity) is locked when creating the order.
    Other players can then sell items to fulfill your order.
    Items will be delivered to your pending items when the order is filled. */
  public createGrandExchangeBuyOrder(
    name: string,
    body: CreateGrandExchangeBuyOrderApiBody,
  ): Promise<CreateGrandExchangeBuyOrderApiResult> {
    return this.httpClient.post<CreateGrandExchangeBuyOrderApiResult>(
      `/my/${name}/action/grandexchange/create_buy_order`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Sell items to an existing buy order at the Grand Exchange on the character's map.

    You will receive the gold immediately.
    The buyer will receive the items in their pending items. */
  public fillGrandExchange(
    name: string,
    body: FillGrandExchangeApiBody,
  ): Promise<FillGrandExchangeApiResult> {
    return this.httpClient.post<FillGrandExchangeApiResult>(
      `/my/${name}/action/grandexchange/fill`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Complete a task. */
  public completeTask(name: string): Promise<CompleteTaskApiResult> {
    return this.httpClient.post<CompleteTaskApiResult>(`/my/${name}/action/task/complete`, {
      isSecure: true,
    });
  }

  /** Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources. */
  public exchangeTask(name: string): Promise<ExchangeTaskApiResult> {
    return this.httpClient.post<ExchangeTaskApiResult>(`/my/${name}/action/task/exchange`, {
      isSecure: true,
    });
  }

  /** Accepting a new task. */
  public acceptTask(name: string): Promise<AcceptTaskApiResult> {
    return this.httpClient.post<AcceptTaskApiResult>(`/my/${name}/action/task/new`, {
      isSecure: true,
    });
  }

  /** Trading items with a Tasks Master. */
  public tradeTaskItem(name: string, body: TradeTaskItemApiBody): Promise<TradeTaskItemApiResult> {
    return this.httpClient.post<TradeTaskItemApiResult>(`/my/${name}/action/task/trade`, {
      body,
      isSecure: true,
    });
  }

  /** Cancel a task for 1 tasks coin. */
  public cancelTask(name: string): Promise<CancelTaskApiResult> {
    return this.httpClient.post<ExchangeTaskApiResult>(`/my/${name}/action/task/cancel`, {
      isSecure: true,
    });
  }

  /** Give gold to another character in your account on the same map. */
  public giveGold(name: string, body: GiveGoldApiBody): Promise<GiveGoldApiResult> {
    return this.httpClient.post<GiveGoldApiResult>(`/my/${name}/action/give/gold`, {
      body,
      isSecure: true,
    });
  }

  /** Give items to another character in your account on the same map.
   * The cooldown will be 3 seconds multiplied by the number of different items given. */
  public giveItems(name: string, body: GiveItemsApiBody): Promise<GiveItemsApiResult> {
    return this.httpClient.post<GiveItemsApiResult>(`/my/${name}/action/give/item`, {
      body,
      isSecure: true,
    });
  }

  /** Claim a pending item with a specific character. */
  public claimPendingItem(id: string, name: string): Promise<ClaimPendingItemApiResult> {
    return this.httpClient.post<ClaimPendingItemApiResult>(`/my/${name}/action/claim_item/${id}`, {
      isSecure: true,
    });
  }

  /** Delete an item from your character's inventory. */
  public deleteItem(name: string, body: DeleteItemApiBody): Promise<DeleteItemApiResult> {
    return this.httpClient.post<DeleteItemApiResult>(`/my/${name}/action/delete`, {
      body,
      isSecure: true,
    });
  }

  /** Change the skin of your character. */
  public changeSkin(name: string, body: ChangeSkinApiBody): Promise<ChangeSkinApiResult> {
    return this.httpClient.post<ChangeSkinApiResult>(`/my/${name}/action/change_skin`, {
      body,
      isSecure: true,
    });
  }

  /** Rename a character. An active membership is required. */
  public rename(name: string, body: RenameApiBody): Promise<RenameApiResult> {
    return this.httpClient.post<RenameApiResult>(`/my/${name}/action/rename`, {
      body,
      isSecure: true,
    });
  }

  /** History of the last 5000 actions of all your characters. */
  public getAllLogs(params: GetAllLogsApiQuery = {}): Promise<GetAllLogsApiResult> {
    return this.httpClient.get<GetAllLogsApiResult>(`/my/logs`, {
      query: params,
      isSecure: true,
    });
  }

  /** History of the last actions of your character. */
  public getLogs(name: string, params: GetLogsApiQuery): Promise<GetLogsApiResult> {
    return this.httpClient.get<GetLogsApiResult>(`/my/logs/${name}`, {
      query: params,
      isSecure: true,
    });
  }

  /** List of your characters. */
  public getAll(): Promise<GetMyCharactersApiResult> {
    return this.httpClient.get<GetMyCharactersApiResult>(`/my/characters`, {
      isSecure: true,
    });
  }
}
