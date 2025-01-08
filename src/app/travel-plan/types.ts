import { z } from 'zod';
import {
  deleteTravelRouteResponseSchema,
  getTravelRouteByIdResponseSchema,
  getTravelRouteListResponseSchema,
  patchTravelRouteRequestSchema,
  travelRouteResponseSchema,
  postSavedTravelRouteRequestSchema,
  postSavedTravelRouteResponseSchema,
  postTravelRouteRequestSchema,
  scheduleItemSchema,
  scheduleSchema,
  travelConfigSchema,
  travelRouteSchema,
} from './schemas';

// 공통 타입
export type ScheduleItem = z.infer<typeof scheduleItemSchema>;

export type Schedule = z.infer<typeof scheduleSchema>;

export type TravelConfig = z.infer<typeof travelConfigSchema>;

// 사용자 여행 목록 조회 GET
export type TravelRoute = z.infer<typeof travelRouteSchema>;
export type GetTravelRoutesResponse = z.infer<typeof getTravelRouteListResponseSchema>;

// 여행 경로 생성 POST
export type PostTravelRouteRequest = z.infer<typeof postTravelRouteRequestSchema>;

// 여행 경로 수정 PATCH
export type PatchTravelRouteRequest = z.infer<typeof patchTravelRouteRequestSchema>;

// 여행 경로 생성 및 수정 응답
export type TravelRouteResponse = z.infer<typeof travelRouteResponseSchema>;

// 사용자 여행 경로 저장 POST
export type PostSavedTravelRouteRequest = z.infer<typeof postSavedTravelRouteRequestSchema>;
export type PostSavedTravelRouteResponse = z.infer<typeof postSavedTravelRouteResponseSchema>;

// 사용자 저장 여행 경로 조회 GET by ID
export type GetTravelRouteByIdResponse = z.infer<typeof getTravelRouteByIdResponseSchema>;

// 사용자 저장 여행 경로 삭제 DELETE
export type DeleteTravelRouteResponse = z.infer<typeof deleteTravelRouteResponseSchema>;
