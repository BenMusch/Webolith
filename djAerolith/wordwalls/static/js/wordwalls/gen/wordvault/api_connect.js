// @generated by protoc-gen-connect-es v1.4.0
// @generated from file rpc/wordvault/api.proto (package wordvault, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddCardsRequest, AddCardsResponse, CardCountResponse, Cards, DeleteRequest, DeleteResponse, EditLastScoreRequest, GetCardCountRequest, GetCardInfoRequest, GetNextScheduledRequest, GetSingleNextScheduledRequest, GetSingleNextScheduledResponse, NextScheduledBreakdown, NextScheduledCountRequest, PostponeRequest, PostponeResponse, ScoreCardRequest, ScoreCardResponse } from "./api_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service wordvault.WordVaultService
 */
export const WordVaultService = {
  typeName: "wordvault.WordVaultService",
  methods: {
    /**
     * @generated from rpc wordvault.WordVaultService.GetCardCount
     */
    getCardCount: {
      name: "GetCardCount",
      I: GetCardCountRequest,
      O: CardCountResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.GetCardInformation
     */
    getCardInformation: {
      name: "GetCardInformation",
      I: GetCardInfoRequest,
      O: Cards,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.GetNextScheduled
     */
    getNextScheduled: {
      name: "GetNextScheduled",
      I: GetNextScheduledRequest,
      O: Cards,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.GetSingleNextScheduled
     */
    getSingleNextScheduled: {
      name: "GetSingleNextScheduled",
      I: GetSingleNextScheduledRequest,
      O: GetSingleNextScheduledResponse,
      kind: MethodKind.Unary,
      idempotency: MethodIdempotency.NoSideEffects,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.NextScheduledCount
     */
    nextScheduledCount: {
      name: "NextScheduledCount",
      I: NextScheduledCountRequest,
      O: NextScheduledBreakdown,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.ScoreCard
     */
    scoreCard: {
      name: "ScoreCard",
      I: ScoreCardRequest,
      O: ScoreCardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.EditLastScore
     */
    editLastScore: {
      name: "EditLastScore",
      I: EditLastScoreRequest,
      O: ScoreCardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.AddCards
     */
    addCards: {
      name: "AddCards",
      I: AddCardsRequest,
      O: AddCardsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.Postpone
     */
    postpone: {
      name: "Postpone",
      I: PostponeRequest,
      O: PostponeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc wordvault.WordVaultService.Delete
     */
    delete: {
      name: "Delete",
      I: DeleteRequest,
      O: DeleteResponse,
      kind: MethodKind.Unary,
    },
  }
};

