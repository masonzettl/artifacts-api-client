import { ArtifactsHttpClient } from '../http-client/artifacts.http-client';
import {
  ActionCraftingApiBody,
  ActionCraftingApiResult,
  ActionDepositBankItemApiBody,
  ActionDepositBankGoldApiBody,
  ActionDepositBankGoldApiResult,
  ActionDepositBankItemApiResult,
  ActionEquipItemApiBody,
  ActionEquipItemApiResult,
  ActionFightApiResult,
  ActionGatheringApiResult,
  ActionMoveApiBody,
  ActionMoveApiResult,
  ActionUnequipItemApiBody,
  ActionUnequipItemApiResult,
  ActionWithdrawBankItemApiBody,
  ActionWithdrawBankItemApiResult,
  ActionWithdrawBankGoldApiBody,
  ActionWithdrawBankGoldApiResult,
  ActionRecyclingApiBody,
  ActionRecyclingApiResult,
  ActionGeBuyItemApiBody,
  ActionGeBuyItemApiResult,
  ActionGeCreateSellOrderApiBody,
  ActionGeCreateSellOrderApiResult,
  ActionDeleteItemApiBody,
  ActionDeleteItemApiResult,
  ActionAcceptNewTaskApiResult,
  ActionCompleteTaskApiResult,
  ActionTaskExchangeApiResult,
  GetAllCharactersLogsApiQuery,
  GetAllCharactersLogsApiResult,
  GetMyCharactersApiResult,
  ActionTaskCancelApiResult,
  ActionBuyBankExpansionApiResult,
  ActionTransitionApiResult,
  ActionRestApiResult,
  ActionUseItemApiBody,
  ActionUseItemApiResult,
  ActionFightApiBody,
  ActionNpcBuyItemApiBody,
  ActionNpcBuyItemApiResult,
  ActionNpcSellItemApiBody,
  ActionNpcSellItemApiResult,
  ActionGeCancelOrderApiBody,
  ActionGeCancelOrderApiResult,
  ActionTaskTradeApiBody,
  ActionTaskTradeApiResult,
  ActionGiveGoldApiBody,
  ActionGiveGoldApiResult,
  ActionGiveItemsApiBody,
  ActionGiveItemsApiResult,
  ActionChangeSkinApiBody,
  ActionChangeSkinApiResult,
  GetCharacterLogsApiQuery,
  GetCharacterLogsApiResult,
  ActionGeCreateBuyOrderApiBody,
  ActionGeCreateBuyOrderApiResult,
  ActionGeFillApiBody,
  ActionGeFillApiResult,
  ActionClaimPendingItemApiResult,
  ActionRenameApiBody,
  ActionRenameApiResult,
} from './types/api-schema-bindings.types';

export class ArtifactsMyCharactersApi {
  constructor(private readonly httpClient: ArtifactsHttpClient) {}

  /** Moves a character on the map using the map's X and Y position. */
  public move(name: string, body: ActionMoveApiBody): Promise<ActionMoveApiResult> {
    return this.httpClient.post<ActionMoveApiResult>(`/my/${name}/action/move`, {
      body,
      isSecure: true,
    });
  }

  /** Execute a transition from the current map to another layer.
   * The character must be on a map that has a transition available. */
  public transition(name: string): Promise<ActionTransitionApiResult> {
    return this.httpClient.post<ActionTransitionApiResult>(`/my/${name}/action/transition`, {
      isSecure: true,
    });
  }

  /** Recovers hit points by resting. (1 second per 5 HP, minimum 3 seconds) */
  public rest(name: string): Promise<ActionRestApiResult> {
    return this.httpClient.post<ActionRestApiResult>(`/my/${name}/action/rest`, { isSecure: true });
  }

  /** Equip multiple items on your character.
   * The cooldown will be 3 seconds multiplied by the number of different items equipped. */
  public equipItems(name: string, body: ActionEquipItemApiBody): Promise<ActionEquipItemApiResult> {
    return this.httpClient.post<ActionEquipItemApiResult>(`/my/${name}/action/equip`, {
      body,
      isSecure: true,
    });
  }

  /** Unequip multiple items on your character.
   * The cooldown will be 3 seconds multiplied by the number of different items unequipped. */
  public unequipItems(
    name: string,
    body: ActionUnequipItemApiBody,
  ): Promise<ActionUnequipItemApiResult> {
    return this.httpClient.post<ActionUnequipItemApiResult>(`/my/${name}/action/unequip`, {
      body,
      isSecure: true,
    });
  }

  /** Use an item as a consumable. */
  public useItem(name: string, body: ActionUseItemApiBody): Promise<ActionUseItemApiResult> {
    return this.httpClient.post<ActionUseItemApiResult>(`/my/${name}/action/use`, {
      body,
      isSecure: true,
    });
  }

  /** Start a fight against a monster on the character's map. */
  public fight(name: string, body?: ActionFightApiBody): Promise<ActionFightApiResult> {
    return this.httpClient.post<ActionFightApiResult>(`/my/${name}/action/fight`, {
      body,
      isSecure: true,
    });
  }

  /** Harvest a resource on the character's map. */
  public gathering(name: string): Promise<ActionGatheringApiResult> {
    return this.httpClient.post<ActionGatheringApiResult>(`/my/${name}/action/gathering`, {
      isSecure: true,
    });
  }

  /** Crafting an item. The character must be on a map with a workshop. */
  public crafting(name: string, body: ActionCraftingApiBody): Promise<ActionCraftingApiResult> {
    return this.httpClient.post<ActionCraftingApiResult>(`/my/${name}/action/crafting`, {
      body,
      isSecure: true,
    });
  }

  /** Deposit golds in a bank on the character's map. */
  public ActionDepositBankGold(
    name: string,
    body: ActionDepositBankGoldApiBody,
  ): Promise<ActionDepositBankGoldApiResult> {
    return this.httpClient.post<ActionDepositBankGoldApiResult>(
      `/my/${name}/action/bank/deposit/gold`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Deposit multiple items in a bank on the character's map.
   * The cooldown will be 3 seconds multiplied by the number of different items deposited. */
  public ActionDepositBankItem(
    name: string,
    body: ActionDepositBankItemApiBody,
  ): Promise<ActionDepositBankItemApiResult> {
    return this.httpClient.post<ActionDepositBankItemApiResult>(
      `/my/${name}/action/bank/deposit/item`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Take items from your bank and put them in the character's inventory.
   * The cooldown will be 3 seconds multiplied by the number of different items withdrawn. */
  public withdrawBankItem(
    name: string,
    body: ActionWithdrawBankItemApiBody,
  ): Promise<ActionWithdrawBankItemApiResult> {
    return this.httpClient.post<ActionWithdrawBankItemApiResult>(
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
    body: ActionWithdrawBankGoldApiBody,
  ): Promise<ActionWithdrawBankGoldApiResult> {
    return this.httpClient.post<ActionWithdrawBankGoldApiResult>(
      `/my/${name}/action/bank/withdraw/gold`,
      {
        body,
        isSecure: true,
      },
    );
  }

  /** Buy a 20 slots bank expansion. */
  public buyBankExpansion(name: string): Promise<ActionBuyBankExpansionApiResult> {
    return this.httpClient.post<ActionBuyBankExpansionApiResult>(
      `/my/${name}/action/bank/buy_expansion`,
      {
        isSecure: true,
      },
    );
  }

  /** Buy an item from an NPC on the character's map. */
  public buyNpcItem(
    name: string,
    body: ActionNpcBuyItemApiBody,
  ): Promise<ActionNpcBuyItemApiResult> {
    return this.httpClient.post<ActionNpcBuyItemApiResult>(`/my/${name}/action/npc/buy`, {
      body,
      isSecure: true,
    });
  }

  /** Sell an item to an NPC on the character's map. */
  public sellNpcItem(
    name: string,
    body: ActionNpcSellItemApiBody,
  ): Promise<ActionNpcSellItemApiResult> {
    return this.httpClient.post<ActionNpcSellItemApiResult>(`/my/${name}/action/npc/sell`, {
      body,
      isSecure: true,
    });
  }

  /** Recycling an item. The character must be on a map with a workshop (only for equipments and weapons). */
  public recycling(name: string, body: ActionRecyclingApiBody): Promise<ActionRecyclingApiResult> {
    return this.httpClient.post<ActionRecyclingApiResult>(`/my/${name}/action/recycling`, {
      body,
      isSecure: true,
    });
  }

  /** Buy an item at the Grand Exchange on the character's map. */
  public buyGrandExchangeItem(
    name: string,
    body: ActionGeBuyItemApiBody,
  ): Promise<ActionGeBuyItemApiResult> {
    return this.httpClient.post<ActionGeBuyItemApiResult>(`/my/${name}/action/grandexchange/buy`, {
      body,
      isSecure: true,
    });
  }

  /** Create a sell order at the Grand Exchange on the character's map. */
  public createGrandExchangeSellOrder(
    name: string,
    body: ActionGeCreateSellOrderApiBody,
  ): Promise<ActionGeCreateSellOrderApiResult> {
    return this.httpClient.post<ActionGeCreateSellOrderApiResult>(
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
    body: ActionGeCancelOrderApiBody,
  ): Promise<ActionGeCancelOrderApiResult> {
    return this.httpClient.post<ActionGeCancelOrderApiResult>(
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
    body: ActionGeCreateBuyOrderApiBody,
  ): Promise<ActionGeCreateBuyOrderApiResult> {
    return this.httpClient.post<ActionGeCreateBuyOrderApiResult>(
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
    body: ActionGeFillApiBody,
  ): Promise<ActionGeFillApiResult> {
    return this.httpClient.post<ActionGeFillApiResult>(`/my/${name}/action/grandexchange/fill`, {
      body,
      isSecure: true,
    });
  }

  /** Complete a task. */
  public completeTask(name: string): Promise<ActionCompleteTaskApiResult> {
    return this.httpClient.post<ActionCompleteTaskApiResult>(`/my/${name}/action/task/complete`, {
      isSecure: true,
    });
  }

  /** Exchange 6 tasks coins for a random reward. Rewards are exclusive items or resources. */
  public exchangeTask(name: string): Promise<ActionTaskExchangeApiResult> {
    return this.httpClient.post<ActionTaskExchangeApiResult>(`/my/${name}/action/task/exchange`, {
      isSecure: true,
    });
  }

  /** Accepting a new task. */
  public acceptTask(name: string): Promise<ActionAcceptNewTaskApiResult> {
    return this.httpClient.post<ActionAcceptNewTaskApiResult>(`/my/${name}/action/task/new`, {
      isSecure: true,
    });
  }

  /** Trading items with a Tasks Master. */
  public tradeTaskItem(
    name: string,
    body: ActionTaskTradeApiBody,
  ): Promise<ActionTaskTradeApiResult> {
    return this.httpClient.post<ActionTaskTradeApiResult>(`/my/${name}/action/task/trade`, {
      body,
      isSecure: true,
    });
  }

  /** Cancel a task for 1 tasks coin. */
  public cancelTask(name: string): Promise<ActionTaskCancelApiResult> {
    return this.httpClient.post<ActionTaskCancelApiResult>(`/my/${name}/action/task/cancel`, {
      isSecure: true,
    });
  }

  /** Give gold to another character in your account on the same map. */
  public giveGold(name: string, body: ActionGiveGoldApiBody): Promise<ActionGiveGoldApiResult> {
    return this.httpClient.post<ActionGiveGoldApiResult>(`/my/${name}/action/give/gold`, {
      body,
      isSecure: true,
    });
  }

  /** Give items to another character in your account on the same map.
   * The cooldown will be 3 seconds multiplied by the number of different items given. */
  public giveItems(name: string, body: ActionGiveItemsApiBody): Promise<ActionGiveItemsApiResult> {
    return this.httpClient.post<ActionGiveItemsApiResult>(`/my/${name}/action/give/item`, {
      body,
      isSecure: true,
    });
  }

  /** Claim a pending item with a specific character. */
  public claimPendingItem(id: string, name: string): Promise<ActionClaimPendingItemApiResult> {
    return this.httpClient.post<ActionClaimPendingItemApiResult>(
      `/my/${name}/action/claim_item/${id}`,
      {
        isSecure: true,
      },
    );
  }

  /** Delete an item from your character's inventory. */
  public deleteItem(
    name: string,
    body: ActionDeleteItemApiBody,
  ): Promise<ActionDeleteItemApiResult> {
    return this.httpClient.post<ActionDeleteItemApiResult>(`/my/${name}/action/delete`, {
      body,
      isSecure: true,
    });
  }

  /** Change the skin of your character. */
  public changeSkin(
    name: string,
    body: ActionChangeSkinApiBody,
  ): Promise<ActionChangeSkinApiResult> {
    return this.httpClient.post<ActionChangeSkinApiResult>(`/my/${name}/action/change_skin`, {
      body,
      isSecure: true,
    });
  }

  /** Rename a character. An active membership is required. */
  public rename(name: string, body: ActionRenameApiBody): Promise<ActionRenameApiResult> {
    return this.httpClient.post<ActionRenameApiResult>(`/my/${name}/action/rename`, {
      body,
      isSecure: true,
    });
  }

  /** History of the last 5000 actions of all your characters. */
  public getAllLogs(
    params: GetAllCharactersLogsApiQuery = {},
  ): Promise<GetAllCharactersLogsApiResult> {
    return this.httpClient.get<GetAllCharactersLogsApiResult>(`/my/logs`, {
      query: params,
      isSecure: true,
    });
  }

  /** History of the last actions of your character. */
  public getLogs(
    name: string,
    params: GetCharacterLogsApiQuery,
  ): Promise<GetCharacterLogsApiResult> {
    return this.httpClient.get<GetCharacterLogsApiResult>(`/my/logs/${name}`, {
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
