import { components, paths } from './api-schema.types';

// Server details

export type GetStatusApiResult = paths['/']['get']['responses'][200]['content']['application/json'];

// My account

export type GetBankApiResult =
  paths['/my/bank']['get']['responses'][200]['content']['application/json'];

export type GetBankItemsApiQuery = paths['/my/bank/items']['get']['parameters']['query'];
export type GetBankItemsApiResult =
  paths['/my/bank/items']['get']['responses'][200]['content']['application/json'];

export type GetMyGrandExchangeOrdersApiRequest =
  paths['/my/grandexchange/orders']['get']['parameters']['query'];
export type GetMyGrandExchangeOrdersApiResult =
  paths['/my/grandexchange/orders']['get']['responses'][200]['content']['application/json'];

export type GetMyGrandExchangeHistoryApiRequest =
  paths['/my/grandexchange/history']['get']['parameters']['query'];
export type GetMyGrandExchangeHistoryApiResult =
  paths['/my/grandexchange/history']['get']['responses'][200]['content']['application/json'];

export type GetAccountDetailsApiResult =
  paths['/my/details']['get']['responses'][200]['content']['application/json'];

export type GetPendingItemsApiRequest = paths['/my/pending_items']['get']['parameters']['query'];
export type GetPendingItemsApiResult =
  paths['/my/pending_items']['get']['responses'][200]['content']['application/json'];

export type GetRateLimitsApiResult =
  paths['/my/rates']['get']['responses'][200]['content']['application/json'];

export type ChangePasswordApiBody =
  paths['/my/change_password']['post']['requestBody']['content']['application/json'];
export type ChangePasswordApiResult =
  paths['/my/change_password']['post']['responses'][200]['content']['application/json'];

export type ChangeEmailApiBody =
  paths['/my/change_email']['post']['requestBody']['content']['application/json'];
export type ChangeEmailApiResult =
  paths['/my/change_email']['post']['responses'][200]['content']['application/json'];

export type GetMySubscriptionApiResult =
  paths['/my/subscription']['get']['responses'][200]['content']['application/json'];

export type SubscribeWithStripeApiBody =
  paths['/my/subscribe/stripe']['post']['requestBody']['content']['application/json'];
export type SubscribeWithStripeApiResult =
  paths['/my/subscribe/stripe']['post']['responses'][200]['content']['application/json'];

export type SubscribeWithMemberTokenApiResult =
  paths['/my/subscribe/member_token']['post']['responses'][200]['content']['application/json'];

export type CancelSubscriptionApiResult =
  paths['/my/subscribe/cancel']['post']['responses'][200]['content']['application/json'];

export type GetMyPurchaseHistoryApiResult =
  paths['/my/purchase_history']['get']['responses'][200]['content']['application/json'];

export type GetMyGemsHistoryApiResult =
  paths['/my/gems_history']['get']['responses'][200]['content']['application/json'];

export type BuyGemsApiBody =
  paths['/my/buy_gems']['post']['requestBody']['content']['application/json'];
export type BuyGemsApiResult =
  paths['/my/buy_gems']['post']['responses'][200]['content']['application/json'];

// My characters

export type MoveApiBody =
  paths['/my/{name}/action/move']['post']['requestBody']['content']['application/json'];
export type MoveApiResult =
  paths['/my/{name}/action/move']['post']['responses'][200]['content']['application/json'];

export type TransitionApiResult =
  paths['/my/{name}/action/transition']['post']['responses'][200]['content']['application/json'];

export type RestApiResult =
  paths['/my/{name}/action/rest']['post']['responses'][200]['content']['application/json'];

export type EquipItemsApiBody =
  paths['/my/{name}/action/equip']['post']['requestBody']['content']['application/json'];
export type EquipItemsApiResult =
  paths['/my/{name}/action/equip']['post']['responses'][200]['content']['application/json'];

export type UnequipItemsApiBody =
  paths['/my/{name}/action/unequip']['post']['requestBody']['content']['application/json'];
export type UnequipItemsApiResult =
  paths['/my/{name}/action/unequip']['post']['responses'][200]['content']['application/json'];

export type UseItemApiBody =
  paths['/my/{name}/action/use']['post']['requestBody']['content']['application/json'];
export type UseItemApiResult =
  paths['/my/{name}/action/use']['post']['responses'][200]['content']['application/json'];

export type FightApiBody = components['schemas']['FightRequestSchema']; // Grabbing schema directly due to optional request body
export type FightApiResult =
  paths['/my/{name}/action/fight']['post']['responses'][200]['content']['application/json'];

export type GatheringApiResult =
  paths['/my/{name}/action/gathering']['post']['responses'][200]['content']['application/json'];

export type CraftingApiBody =
  paths['/my/{name}/action/crafting']['post']['requestBody']['content']['application/json'];
export type CraftingApiResult =
  paths['/my/{name}/action/crafting']['post']['responses'][200]['content']['application/json'];

export type DepositBankGoldApiBody =
  paths['/my/{name}/action/bank/deposit/gold']['post']['requestBody']['content']['application/json'];
export type DepositBankGoldApiResult =
  paths['/my/{name}/action/bank/deposit/gold']['post']['responses'][200]['content']['application/json'];

export type DepositBankItemApiBody =
  paths['/my/{name}/action/bank/deposit/item']['post']['requestBody']['content']['application/json'];
export type DepositBankItemApiResult =
  paths['/my/{name}/action/bank/deposit/item']['post']['responses'][200]['content']['application/json'];

export type WithdrawBankItemApiBody =
  paths['/my/{name}/action/bank/withdraw/item']['post']['requestBody']['content']['application/json'];
export type WithdrawBankItemApiResult =
  paths['/my/{name}/action/bank/withdraw/item']['post']['responses'][200]['content']['application/json'];

export type WithdrawBankGoldApiBody =
  paths['/my/{name}/action/bank/withdraw/gold']['post']['requestBody']['content']['application/json'];
export type WithdrawBankGoldApiResult =
  paths['/my/{name}/action/bank/withdraw/gold']['post']['responses'][200]['content']['application/json'];

export type BuyExpansionApiResult =
  paths['/my/{name}/action/bank/buy_expansion']['post']['responses'][200]['content']['application/json'];

export type NpcBuyItemApiBody =
  paths['/my/{name}/action/npc/buy']['post']['requestBody']['content']['application/json'];
export type NpcBuyItemApiResult =
  paths['/my/{name}/action/npc/buy']['post']['responses'][200]['content']['application/json'];

export type NpcSellItemApiBody =
  paths['/my/{name}/action/npc/sell']['post']['requestBody']['content']['application/json'];
export type NpcSellItemApiResult =
  paths['/my/{name}/action/npc/sell']['post']['responses'][200]['content']['application/json'];

export type RecyclingApiBody =
  paths['/my/{name}/action/recycling']['post']['requestBody']['content']['application/json'];
export type RecyclingApiResult =
  paths['/my/{name}/action/recycling']['post']['responses'][200]['content']['application/json'];

export type BuyGrandExchangeItemApiBody =
  paths['/my/{name}/action/grandexchange/buy']['post']['requestBody']['content']['application/json'];
export type BuyGrandExchangeItemApiResult =
  paths['/my/{name}/action/grandexchange/buy']['post']['responses'][200]['content']['application/json'];

export type CreateGrandExchangeSellOrderApiBody =
  paths['/my/{name}/action/grandexchange/create_sell_order']['post']['requestBody']['content']['application/json'];
export type CreateGrandExchangeSellOrderApiResult =
  paths['/my/{name}/action/grandexchange/create_sell_order']['post']['responses'][200]['content']['application/json'];

export type CancelGrandExchangeOrderApiBody =
  paths['/my/{name}/action/grandexchange/cancel']['post']['requestBody']['content']['application/json'];
export type CancelGrandExchangeOrderApiResult =
  paths['/my/{name}/action/grandexchange/cancel']['post']['responses'][200]['content']['application/json'];

export type CreateGrandExchangeBuyOrderApiBody =
  paths['/my/{name}/action/grandexchange/create_buy_order']['post']['requestBody']['content']['application/json'];
export type CreateGrandExchangeBuyOrderApiResult =
  paths['/my/{name}/action/grandexchange/create_buy_order']['post']['responses'][200]['content']['application/json'];

export type FillGrandExchangeApiBody =
  paths['/my/{name}/action/grandexchange/fill']['post']['requestBody']['content']['application/json'];
export type FillGrandExchangeApiResult =
  paths['/my/{name}/action/grandexchange/fill']['post']['responses'][200]['content']['application/json'];

export type CompleteTaskApiResult =
  paths['/my/{name}/action/task/complete']['post']['responses'][200]['content']['application/json'];

export type ExchangeTaskApiResult =
  paths['/my/{name}/action/task/exchange']['post']['responses'][200]['content']['application/json'];

export type AcceptTaskApiResult =
  paths['/my/{name}/action/task/new']['post']['responses'][200]['content']['application/json'];

export type TradeTaskItemApiBody =
  paths['/my/{name}/action/task/trade']['post']['requestBody']['content']['application/json'];
export type TradeTaskItemApiResult =
  paths['/my/{name}/action/task/trade']['post']['responses'][200]['content']['application/json'];

export type CancelTaskApiResult =
  paths['/my/{name}/action/task/cancel']['post']['responses'][200]['content']['application/json'];

export type GiveGoldApiBody =
  paths['/my/{name}/action/give/gold']['post']['requestBody']['content']['application/json'];
export type GiveGoldApiResult =
  paths['/my/{name}/action/give/gold']['post']['responses'][200]['content']['application/json'];

export type GiveItemsApiBody =
  paths['/my/{name}/action/give/item']['post']['requestBody']['content']['application/json'];
export type GiveItemsApiResult =
  paths['/my/{name}/action/give/item']['post']['responses'][200]['content']['application/json'];

export type ClaimPendingItemApiResult =
  paths['/my/{name}/action/claim_item/{id}']['post']['responses'][200]['content']['application/json'];

export type DeleteItemApiBody =
  paths['/my/{name}/action/delete']['post']['requestBody']['content']['application/json'];
export type DeleteItemApiResult =
  paths['/my/{name}/action/delete']['post']['responses'][200]['content']['application/json'];

export type ChangeSkinApiBody =
  paths['/my/{name}/action/change_skin']['post']['requestBody']['content']['application/json'];
export type ChangeSkinApiResult =
  paths['/my/{name}/action/change_skin']['post']['responses'][200]['content']['application/json'];

export type RenameApiBody =
  paths['/my/{name}/action/rename']['post']['requestBody']['content']['application/json'];
export type RenameApiResult =
  paths['/my/{name}/action/rename']['post']['responses'][200]['content']['application/json'];

export type GetAllLogsApiQuery = paths['/my/logs']['get']['parameters']['query'];
export type GetAllLogsApiResult =
  paths['/my/logs']['get']['responses'][200]['content']['application/json'];

export type GetLogsApiQuery = paths['/my/logs/{name}']['get']['parameters']['query'];
export type GetLogsApiResult =
  paths['/my/logs/{name}']['get']['responses'][200]['content']['application/json'];

export type GetMyCharactersApiResult =
  paths['/my/characters']['get']['responses'][200]['content']['application/json'];

// Accounts

export type GetAccountAchievementsApiQuery =
  paths['/accounts/{account}/achievements']['get']['parameters']['query'];
export type GetAccountAchievementsApiResult =
  paths['/accounts/{account}/achievements']['get']['responses'][200]['content']['application/json'];

export type GetAccountCharactersApiResult =
  paths['/accounts/{account}/characters']['get']['responses'][200]['content']['application/json'];

export type CreateAccountApiBody =
  paths['/accounts/create']['post']['requestBody']['content']['application/json'];
export type CreateAccountApiResult =
  paths['/accounts/create']['post']['responses'][200]['content']['application/json'];

export type ForgotPasswordApiBody =
  paths['/accounts/forgot_password']['post']['requestBody']['content']['application/json'];
export type ForgotPasswordApiResult =
  paths['/accounts/forgot_password']['post']['responses'][200]['content']['application/json'];

export type ResetPasswordApiBody =
  paths['/accounts/reset_password']['post']['requestBody']['content']['application/json'];
export type ResetPasswordApiResult =
  paths['/accounts/reset_password']['post']['responses'][200]['content']['application/json'];

export type GetAccountApiResult =
  paths['/accounts/{account}']['get']['responses'][200]['content']['application/json'];

// Achievements

export type GetAllAchievementsApiQuery = paths['/achievements']['get']['parameters']['query'];
export type GetAllAchievementsApiResult =
  paths['/achievements']['get']['responses'][200]['content']['application/json'];

export type GetAchievementApiResult =
  paths['/achievements/{code}']['get']['responses'][200]['content']['application/json'];

// Badges

export type GetAllBadgesApiQuery = paths['/badges']['get']['parameters']['query'];
export type GetAllBadgesApiResult =
  paths['/badges']['get']['responses'][200]['content']['application/json'];

export type GetBadgeApiResult =
  paths['/badges/{code}']['get']['responses'][200]['content']['application/json'];

// Skins

export type GetAllSkinsApiQuery = paths['/skins']['get']['parameters']['query'];
export type GetAllSkinsApiResult =
  paths['/skins']['get']['responses'][200]['content']['application/json'];

export type GetSkinApiResult =
  paths['/skins/{code}']['get']['responses'][200]['content']['application/json'];

// Season Rewards

export type GetAllSeasonRewardsApiQuery = paths['/season_rewards']['get']['parameters']['query'];
export type GetAllSeasonRewardsApiResult =
  paths['/season_rewards/{code}']['get']['responses'][200]['content']['application/json'];

export type GetSeasonRewardsByCodeApiQuery =
  paths['/season_rewards/{code}']['get']['parameters']['query'];
export type GetSeasonRewardsByCodeApiResult =
  paths['/season_rewards/{code}']['get']['responses'][200]['content']['application/json'];

// Characters

export type CreateCharacterApiBody =
  paths['/characters/create']['post']['requestBody']['content']['application/json'];
export type CreateCharacterApiResult =
  paths['/accounts/create']['post']['responses'][200]['content']['application/json'];

export type DeleteCharacterApiBody =
  paths['/characters/delete']['post']['requestBody']['content']['application/json'];
export type DeleteCharacterApiResult =
  paths['/characters/delete']['post']['responses'][200]['content']['application/json'];

export type GetCharacterStatsApiResult =
  paths['/characters/{name}/stats']['get']['responses'][200]['content']['application/json'];

export type GetActiveCharactersApiQuery = paths['/characters/active']['get']['parameters']['query'];
export type GetActiveCharactersApiResult =
  paths['/characters/active']['get']['responses'][200]['content']['application/json'];

export type GetCharacterApiResult =
  paths['/characters/{name}']['get']['responses'][200]['content']['application/json'];

// Effects

export type GetAllEffectsApiQuery = paths['/effects']['get']['parameters']['query'];
export type GetAllEffectsApiResult =
  paths['/effects']['get']['responses'][200]['content']['application/json'];

export type GetEffectApiResult =
  paths['/effects/{code}']['get']['responses'][200]['content']['application/json'];

// Events

export type GetAllActiveEventsApiQuery = paths['/events/active']['get']['parameters']['query'];
export type GetAllActiveEventsApiResult =
  paths['/events/active']['get']['responses'][200]['content']['application/json'];

export type GetAllEventsApiQuery = paths['/events']['get']['parameters']['query'];
export type GetAllEventsApiResult =
  paths['/events']['get']['responses'][200]['content']['application/json'];

// Grand Exchange

export type GetGrandExchangeSellHistoryApiQuery =
  paths['/grandexchange/history/{code}']['get']['parameters']['query'];
export type GetGrandExchangeSellHistoryApiResult =
  paths['/grandexchange/history/{code}']['get']['responses'][200]['content']['application/json'];

export type GetGrandExchangeSellOrdersApiQuery =
  paths['/grandexchange/orders']['get']['parameters']['query'];
export type GetGrandExchangeSellOrdersApiResult =
  paths['/grandexchange/orders']['get']['responses'][200]['content']['application/json'];

export type GetGrandExchangeSellOrderApiResult =
  paths['/grandexchange/orders/{id}']['get']['responses'][200]['content']['application/json'];

// Items

export type GetAllItemsApiQuery = paths['/items']['get']['parameters']['query'];
export type GetAllItemsApiResult =
  paths['/items']['get']['responses'][200]['content']['application/json'];

export type GetItemApiResult =
  paths['/items/{code}']['get']['responses'][200]['content']['application/json'];

// Leaderboard

export type GetCharactersLeaderboardApiQuery =
  paths['/leaderboard/characters']['get']['parameters']['query'];
export type GetCharactersLeaderboardApiResult =
  paths['/leaderboard/characters']['get']['responses'][200]['content']['application/json'];

export type GetAccountsLeaderboardApiQuery =
  paths['/leaderboard/accounts']['get']['parameters']['query'];
export type GetAccountsLeaderboardApiResult =
  paths['/leaderboard/accounts']['get']['responses'][200]['content']['application/json'];

// Maps

export type GetAllMapsApiQuery = paths['/maps']['get']['parameters']['query'];
export type GetAllMapsApiResult =
  paths['/maps']['get']['responses'][200]['content']['application/json'];

export type GetLayerMapsApiQuery = paths['/maps/{layer}']['get']['parameters']['query'];
export type GetLayerMapsApiResult =
  paths['/maps/{layer}']['get']['responses'][200]['content']['application/json'];

export type GetMapByPositionApiResult =
  paths['/maps/{layer}/{x}/{y}']['get']['responses'][200]['content']['application/json'];

export type GetMapByIdApiResult =
  paths['/maps/id/{map_id}']['get']['responses'][200]['content']['application/json'];

// Monsters

export type GetAllMonstersApiQuery = paths['/monsters']['get']['parameters']['query'];
export type GetAllMonstersApiResult =
  paths['/monsters']['get']['responses'][200]['content']['application/json'];

export type GetMonsterApiResult =
  paths['/monsters/{code}']['get']['responses'][200]['content']['application/json'];

// NPCs

export type GetAllNpcsApiQuery = paths['/npcs/details']['get']['parameters']['query'];
export type GetAllNpcsApiResult =
  paths['/npcs/details']['get']['responses'][200]['content']['application/json'];

export type GetNpcApiResult =
  paths['/npcs/details/{code}']['get']['responses'][200]['content']['application/json'];

export type GetNpcItemsApiQuery = paths['/npcs/items/{code}']['get']['parameters']['query'];
export type GetNpcItemsApiResult =
  paths['/npcs/items/{code}']['get']['responses'][200]['content']['application/json'];

export type GetAllNpcsItemsApiQuery = paths['/npcs/items']['get']['parameters']['query'];
export type GetAllNpcsItemsApiResult =
  paths['/npcs/items']['get']['responses'][200]['content']['application/json'];

// Raids

export type GetAllRaidsApiQuery = paths['/raids']['get']['parameters']['query'];
export type GetAllRaidsApiResult =
  paths['/raids']['get']['responses'][200]['content']['application/json'];

export type GetRaidApiResult =
  paths['/raids/{code}']['get']['responses'][200]['content']['application/json'];

export type GetRaidLeaderboardApiQuery =
  paths['/raids/{code}/leaderboard']['get']['parameters']['query'];
export type GetRaidLeaderboardApiResult =
  paths['/raids/{code}/leaderboard']['get']['responses'][200]['content']['application/json'];

// Resources

export type GetAllResourcesApiQuery = paths['/resources']['get']['parameters']['query'];
export type GetAllResourcesApiResult =
  paths['/resources']['get']['responses'][200]['content']['application/json'];

export type GetResourceApiResult =
  paths['/resources/{code}']['get']['responses'][200]['content']['application/json'];

// Tasks

export type GetAllTasksApiQuery = paths['/tasks/list']['get']['parameters']['query'];
export type GetAllTasksApiResult =
  paths['/tasks/list']['get']['responses'][200]['content']['application/json'];

export type GetTaskApiResult =
  paths['/tasks/list/{code}']['get']['responses'][200]['content']['application/json'];

export type GetAllTasksRewardsApiQuery = paths['/tasks/rewards']['get']['parameters']['query'];
export type GetAllTasksRewardsApiResult =
  paths['/tasks/rewards']['get']['responses'][200]['content']['application/json'];

export type GetTasksRewardsApiResult =
  paths['/tasks/rewards/{code}']['get']['responses'][200]['content']['application/json'];

// Simulation

export type FightSimulationApiBody =
  paths['/simulation/fight']['post']['requestBody']['content']['application/json'];
export type FightSimulationApiResult =
  paths['/simulation/fight']['post']['responses'][200]['content']['application/json'];

// Token

export type GenerateTokenApiResult =
  paths['/token']['post']['responses'][200]['content']['application/json'];

// Gems Shop

export type GetCatalogApiResult =
  paths['/gems_shop/']['get']['responses'][200]['content']['application/json'];

export type BuySkinApiBody =
  paths['/gems_shop/skin']['post']['requestBody']['content']['application/json'];
export type BuySkinApiResult =
  paths['/gems_shop/skin']['post']['responses'][200]['content']['application/json'];

export type BuySpawnEventApiBody =
  paths['/gems_shop/spawn_event']['post']['requestBody']['content']['application/json'];
export type BuySpawnEventApiResult =
  paths['/gems_shop/spawn_event']['post']['responses'][200]['content']['application/json'];

export type BuySubscriptionApiResult =
  paths['/gems_shop/subscription']['post']['responses'][200]['content']['application/json'];

export type BuyCustomDesignApiBody =
  paths['/gems_shop/buy_custom_design']['post']['requestBody']['content']['application/json'];
export type BuyCustomDesignApiResult =
  paths['/gems_shop/buy_custom_design']['post']['responses'][200]['content']['application/json'];

// Game Assistant

export type AskGameAssistantApiBody =
  paths['/game_assistant/ask']['post']['requestBody']['content']['application/json'];
export type AskGameAssistantApiResult =
  paths['/game_assistant/ask']['post']['responses'][200]['content']['application/json'];
