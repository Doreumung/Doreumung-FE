import { z } from 'zod';

// 여행 경로 특정 장소 나타내는 기본 단위
export const scheduleItemSchema = z.object({
  place_id: z.number(),
  name: z.string(),
  latitude: z.number(),
  logitude: z.number(),
});

// 시간대별 장소 정보 포함
export const scheduleSchema = z.object({
  breakfast: z.union([z.null(), scheduleItemSchema, scheduleItemSchema.array()]),
  morning: z.union([z.null(), scheduleItemSchema, scheduleItemSchema.array()]),
  lunch: z.union([z.null(), scheduleItemSchema, scheduleItemSchema.array()]),
  afternoon: z.union([z.null(), scheduleItemSchema, scheduleItemSchema.array()]),
  dinner: z.union([z.null(), scheduleItemSchema, scheduleItemSchema.array()]),
});

// Config 스키마
export const travelConfigSchema = z.object({
  regions: z.string().array(),
  themes: z.string().array(),
  schedule: z.object({
    breakfast: z.boolean(),
    morning: z.number(),
    lunch: z.boolean(),
    afternoon: z.number(),
    dinner: z.boolean(),
  }),
});

// 공통 여행 경로 정보 베이스
export const travelRouteBaseSchema = z.object({
  title: z
    .string()
    .min(1, { message: '제목을 입력해 주세요.' })
    .max(50, { message: '제목은 50자 이하로 작성해 주세요.' }),
  schedule: scheduleSchema,
  config: travelConfigSchema,
});

// 여행 경로 데이터 스키마 (확장 스키마)
export const travelRouteSchema = travelRouteBaseSchema.extend({
  travelroute_id: z.number(),
  user_id: z.number(),
});

//// API 스키마

// 사용자 여행 목록 조회 GET
export const getTravelRouteListResponseSchema = travelRouteSchema.array();

// 여행 경로 생성 POST (요청)
export const postTravelRouteRequestSchema = z.object({
  config: travelConfigSchema,
});

// 여행 경로 수정 PATCH (요청)
export const patchTravelRouteRequestSchema = travelRouteBaseSchema.partial();

// 여행 경로 생성 및 수정 응답
export const travelRouteResponseSchema = z.object({
  schedule: scheduleSchema,
  config: travelConfigSchema,
});

// 사용자 여행 경로 저장 POST (요청, 응답)
export const postSavedTravelRouteRequestSchema = travelRouteBaseSchema;

export const postSavedTravelRouteResponseSchema = z.object({
  travel_route_id: z.number(),
});

// 사용자 저장 여행 경로 조회 GET by ID
export const getTravelRouteByIdResponseSchema = travelRouteSchema;

// 사용자 저장 여행 경로 삭제 DELETE
export const deleteTravelRouteResponseSchema = z.object({
  message: z.string(),
});
