// 임시 데이터
const travelRoutes = [
  {
    travelroute_id: 1,
    user_id: 1,
    title: '엄청나게 재밌고 굉장히 신나고 흥미로웠던 나의 첫 제주도 여행',
    schedule: {
      breakfast: {
        place_id: 101,
        name: '제주 전복죽',
        latitude: '33.510413',
        logitude: '126.491353',
      },
      morning1: {
        place_id: 103,
        name: '한라산',
        latitude: '33.361666',
        logitude: '126.533123',
      },
      morning2: {
        place_id: 104,
        name: '용눈이오름',
        latitude: '33.465833',
        logitude: '126.843611',
      },
      lunch: {
        place_id: 105,
        name: '흑돼지 전문점',
        latitude: '33.509621',
        logitude: '126.490297',
      },
      afternoon1: {
        place_id: 106,
        name: '성산일출봉',
        latitude: '33.451655',
        logitude: '126.934282',
      },
      dinner: {
        place_id: 107,
        name: '해물탕 전문점',
        latitude: '33.512247',
        logitude: '126.524325',
      },
    },
    config: {
      regions: ['제주시', '서귀포시'],
      themes: ['자연', '카페'],
      schedule: {
        breakfast: true,
        morning: 2,
        lunch: true,
        afternoon: 1,
        dinner: true,
      },
    },
  },
  {
    travelroute_id: 2,
    user_id: 2,
    title: '또 다른 여행 경로',
    schedule: {
      breakfast: {
        place_id: 201,
        name: '오션뷰 카페',
        latitude: '33.583033',
        logitude: '126.702593',
      },
      morning1: {
        place_id: 203,
        name: '우도',
        latitude: '33.499666',
        logitude: '126.949824',
      },
      lunch: {
        place_id: 204,
        name: '갈치조림 맛집',
        latitude: '33.509222',
        logitude: '126.510397',
      },
      afternoon2: {
        place_id: 205,
        name: '카멜리아힐',
        latitude: '33.310212',
        logitude: '126.414023',
      },
      dinner: {
        place_id: 207,
        name: '전통 한식당',
        latitude: '33.247158',
        logitude: '126.410325',
      },
    },
    config: {
      regions: ['성산', '섭지코지'],
      themes: ['전통', '음식'],
      schedule: {
        breakfast: true,
        morning: 1,
        lunch: true,
        afternoon: 1,
        dinner: true,
      },
    },
  },
  {
    travelroute_id: 3,
    user_id: 3,
    title: '협재 여행',
    schedule: {
      breakfast: {
        place_id: 301,
        name: '돌하르방 빵집',
        latitude: '33.396772',
        logitude: '126.287238',
      },
      morning1: {
        place_id: 302,
        name: '협재 해수욕장',
        latitude: '33.395298',
        logitude: '126.239264',
      },
      morning2: {
        place_id: 303,
        name: '한림공원',
        latitude: '33.390675',
        logitude: '126.264627',
      },
      lunch: {
        place_id: 304,
        name: '고기국수 맛집',
        latitude: '33.499512',
        logitude: '126.531267',
      },
      afternoon1: {
        place_id: 305,
        name: '제주 신화월드',
        latitude: '33.309625',
        logitude: '126.463412',
      },
      afternoon2: {
        place_id: 306,
        name: '오설록 티뮤지엄',
        latitude: '33.305542',
        logitude: '126.289349',
      },
      dinner: {
        place_id: 307,
        name: '뿔소라 해물찜',
        latitude: '33.394132',
        logitude: '126.559471',
      },
    },
    config: {
      regions: ['협재', '한림'],
      themes: ['바다', '음식'],
      schedule: {
        breakfast: true,
        morning: 2,
        lunch: true,
        afternoon: 2,
        dinner: true,
      },
    },
  },
  {
    travelroute_id: 4,
    user_id: 4,
    title: '성산 일출여행',
    schedule: {
      breakfast: {
        place_id: 401,
        name: '성산 아침 해장국',
        latitude: '33.461555',
        logitude: '126.931112',
      },
      morning1: {
        place_id: 402,
        name: '섭지코지',
        latitude: '33.424933',
        logitude: '126.924502',
      },
      morning3: {
        place_id: 403,
        name: '정방폭포',
        latitude: '33.244412',
        logitude: '126.568131',
      },
      lunch: {
        place_id: 404,
        name: '바다뷰 레스토랑',
        latitude: '33.453214',
        logitude: '126.927531',
      },
      afternoon2: {
        place_id: 406,
        name: '만장굴',
        latitude: '33.531156',
        logitude: '126.767328',
      },
      dinner: {
        place_id: 407,
        name: '제주 한우 전문점',
        latitude: '33.488251',
        logitude: '126.801142',
      },
    },
    config: {
      regions: ['성산', '섭지코지'],
      themes: ['일출', '해변'],
      schedule: {
        breakfast: true,
        morning: 2,
        lunch: true,
        afternoon: 1,
        dinner: true,
      },
    },
  },
  {
    travelroute_id: 5,
    user_id: 5,
    title: '우도 여행',
    schedule: {
      breakfast: {
        place_id: 501,
        name: '우도 땅콩아이스크림',
        latitude: '33.504712',
        logitude: '126.951944',
      },
      morning1: {
        place_id: 502,
        name: '검멀레 해수욕장',
        latitude: '33.506111',
        logitude: '126.957222',
      },
      morning2: {
        place_id: 503,
        name: '우도 봉수대',
        latitude: '33.508333',
        logitude: '126.960833',
      },
      lunch: {
        place_id: 504,
        name: '우도 해산물 맛집',
        latitude: '33.505000',
        logitude: '126.952500',
      },
      afternoon1: {
        place_id: 505,
        name: '우도 해변',
        latitude: '33.502222',
        logitude: '126.948333',
      },
      dinner: {
        place_id: 506,
        name: '우도 땅콩막걸리집',
        latitude: '33.503333',
        logitude: '126.951111',
      },
    },
    config: {
      regions: ['우도', '성산'],
      themes: ['자연', '맛집'],
      schedule: {
        breakfast: true,
        morning: 2,
        lunch: true,
        afternoon: 1,
        dinner: true,
      },
    },
  },
];

export default travelRoutes;
