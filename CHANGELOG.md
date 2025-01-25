# 📚 체인지로그

<details>
  <summary>1주차 (12/26 ~ 1/1)</summary>
<details>  
<summary><strong>[공통 컴포넌트][여행 계획]권여진</strong></summary>
  
### ✅ Done

<hr>

- 공통 컴포넌트

  - Input 컴포넌트
    - 다양한 스타일 적용 (cva, clsx, twMerge)
  - Dropdown Menu 컴포넌트
    - Dropdown Menu 바깥 클릭시 창 꺼지는 훅 추가

- 여행 계획 페이지 `travel-plan` (멀티 스텝 폼)

  - 제주 지역 선택 (12개 구역)

    - 제주 지역 선택 컴포넌트 UI 제작
    - 카카오 Map API 사용
    - 제주 12개 구역 다각형(위도, 경도) 띄우기 및 클릭 이벤트 추가

  - 테마 및 일정 선택

    - 테마 및 일정 선택 컴포넌트 UI 제작

  - 여행 일정 확인
    - 여행 일정 확인 컴포넌트 UI 제작
    - 카카오 Map API 사용

### ⚙️ in Progress

  <hr>
  
  - 여행 계획 페이지
    - 모바일 레이아웃 최적화 진행 중
    - 제주 지역 선택, 테마 및 일정 선택 폼 상태관리 전달(RTK + RTK Query)
        
### 🖼️ Preview

 <hr>

<div align=center>
  <img src='https://github.com/user-attachments/assets/bd56be05-62bc-41b5-bbe7-c04a9211aaa7' width=400/> 
  <img src='https://github.com/user-attachments/assets/45431b84-b94d-402f-b2d7-4d94e09d0353' width=100/> 
</div>

<div align=center>
  <img src='https://github.com/user-attachments/assets/31dcc92c-258c-4fcd-9b0d-a2bbf5a8bbf6' width=500 />
  <img src='https://github.com/user-attachments/assets/c470b030-eb32-4aad-913e-ad8194caccf6' width=500 />
  <img src='https://github.com/user-attachments/assets/95732dac-a8c6-4e15-a9ee-ef9042aec468' width=500 />
</div>

</details>

<details>  
  <summary><strong>[공통 컴포넌트][여행 후기]정세윤</strong></summary>
  
  ### ✅ Done

---

- **와이어 프레임**
  - 전체적인 페이지 부분 구성 및 기본 레이아웃 설계
- **UI 디자인**
  - 컴포넌트 및 페이지의 UI/레이아웃 디자인
- **공통 컴포넌트 UI 구현**

  - `Header`, `Button`, `Toggle` , `SpeechBubble`, `BackNavigation`, `LoadingSpinner`

- **페이지 UI 구현**

  - **여행 후기 목록 페이지**: `/travel-reviews`

    - 더미데이터를 활용한 레이아웃 구현
    - 후기 카드 컴포넌트 `ReviewCard` 생성

  - **여행 후기 작성 페이지**: `/travel-reviews/create/:travelId`

    - 기본 폼 레이아웃 구현
    - 별점 입력 기능 (라이브러리 활용)
    - Tiptap 커스터마이징을 통한 텍스트 에디터 구현
      - 기본 글씨 스타일 적용 가능

  - **Not Found 페이지**
    - 존재하지 않거나 삭제된 페이지에 표시할 화면 구현

### ⚙️ in Progress

---

- 구현 중인 내용
  - Tiptap 텍스트 에디터에서 사진 업로드 기능 추가
  - 여행 후기 상세 페이지: `/travel-reviews/detail/:reviewId`
  - 후기 작성 스키마 설정

### 🖼️ Preview

---

- 공통 컴포넌트

<div align=center>
  <img src='https://github.com/user-attachments/assets/db282b40-62a2-4f84-bd1d-5398845183e0' width=500 />
  <img src='https://github.com/user-attachments/assets/96ec8df7-1bee-4e02-9e43-5e6281bd68d8' width=500 />
</div>

- 여행 후기 페이지

<div align=center>
  <img src='https://github.com/user-attachments/assets/a0a85840-c61c-4c17-b0fe-40cc116e4acb' width=500 />
  <img src='https://github.com/user-attachments/assets/33719dcc-571a-4ee6-9b0d-39f8a521545a' width=500 />
  <img src='https://github.com/user-attachments/assets/523da01a-ef3d-4ea6-97b6-c24ef665d8a8' width=500 />
</div>

- Not Found 페이지

<div align=center>
  <img src='https://github.com/user-attachments/assets/17e4f158-a56a-4a94-85f7-b954b4c9691a' width=500 />
</div>
</details>

<details>  
<summary><strong>[공통 컴포넌트][유저]조유원</strong></summary>
  
  ### ✅ Done
  <hr>
  
  - **와이어 프레임**
    - 레이아웃 설계
  - **화면 정의서, 플로우차트 작성**
  - **공통 컴포넌트 구현**
    - `Select`, `LayerPopup` 컴포넌트
  - **로그인 폼 레이아웃** : `/sign-in`
    - `react-hook-form` + `zod`를 이용한 유효성 검사 기능
  - **회원가입 폼 레이아웃 및 유효성 검사 구현** : `/sign-up`
    - 닉네임, 이메일, 비밀번호, 비밀번호 확인 필드(필수 항목) 구성
    - 생년월일, 성별 입력 필드(선택 항목) 구성
    - `react-hook-form` + `zod`를 이용하여 필수 항목 필드에 유효성 검사 기능 적용
  - **회원정보 수정 페이지 이전 비밀번호 확인 폼 컴포넌트 구현** : `/confirm-password`
    - 입력 필드 및 버튼 구성
    - 임시 데이터를 사용하여 비밀번호 확인 기능 추가
  - **회원정보 수정 폼 컴포넌트 구현** : `/edit-profile`
    - 기존 사용자 정보(닉네임, 생년월일, 성별) 출력 컴포넌트 구성
    - 비밀번호, 비밀번호 확인, 닉네임 필드에 한해 유효성 검사 기능 추가
    - 사용자 정보 변경 시 기존 사용자 정보 변경

### ⚙️ in Progress

  <hr>
  
  - **회원정보 수정 폼 컴포넌트** : `/edit-profile`
    - 코드 정리 후 최종 마무리
   
  ### 🖼️ Preview
  <div align='center'>
    <img src='https://github.com/user-attachments/assets/204232fb-1661-48e1-b382-337d726e474d' width=500 />
    <img src='https://github.com/user-attachments/assets/de459da7-d57e-4a13-96db-1380f2232289' width=500 />
    <img src='https://github.com/user-attachments/assets/b57aa462-8643-45d3-a444-69aa536bac2d' width=500 />
    <img src='https://github.com/user-attachments/assets/a8d7dc6a-c08c-4426-a86a-6f9999aa674f' width=500 />
    <img src='https://github.com/user-attachments/assets/1f0e0ca5-58a9-4b99-827b-90ab671c4199' width=500 />
  </div>
</details>

</details>

<details>
  <summary>2주차 (1/2 ~ 1/8)</summary>

  <details>  
<summary><strong>[여행 계획]권여진</strong></summary>
  
### ✅ Done

<hr>

- 레이아웃 개선
  - 여행 일정 확인 페이지 레이아웃 재구성 (모바일 대응)
  - 여행 일정 확인 페이지 사이드 스크롤 조정 (데스크탑 대응)
  - 일정 확인 장소 목록 ResizeablePanel 생성
  - 테마/일정 선택 중앙 정렬 최적화
  - 레이어팝업 표시
- 웹 접근성 및 UX

  - 레이어 팝업, 돌멍 이미지를 백그라운드로 변경 (스크린 리더 대응)
  - 오전/오후 최소 1개 필수 선택 안내 팝업 구현
  - 일정 생성 중 새로고침 또는 목록 이동시 팝업 구현 (Hook으로)

- 상태관리 (RTK)

  - 지역, 테마 및 일정 선택 폼 상태관리
  - 페이지 이탈 시 상태 초기화 로직 추가
  - RTK Query를 활용한 API 구조화
  - 여행 계획 스키마 및 타입 정의
  - 지역/테마 미선택 시 전체 선택 로직 구현

- API 연결
  - 지역, 테마 및 일정 선택 후 일정 생성 버튼 클릭시 api 요청 및 응답 (POST)
  - 응답받은 데이터 일정확인 페이지에 연결

### ⚙️ in Progress

  <hr>
  
  - API 연결
    - 일정 확인 페이지에서 다시 뽑기 버튼 클릭시 api 요청 및 응답 (PATCH)
    - 일정 확인 페이지에서 저장 버튼 클릭시 api 요청 및 응답 (POST)
    - 사용자 저장 여행 경로 목록 api 요청 및 응답 (GET)
    - 사용자 저장 여행 경로 목록에서 카드 클릭시 해당 여행 경로 api 요청 및 응답 (GET)
    - 사용자 저장 여행 경로 목록에서 특정 경로 삭제 클릭시 api 요청 및 응답 (DELETE)
        
### 🖼️ Preview

<div align=center>
  <img src='https://github.com/user-attachments/assets/463b6db6-fdef-427c-86a7-a529c0762903' width=500 />
  <img src='https://github.com/user-attachments/assets/36ef1591-646d-486e-a93b-940da8c19dc8' width=500 />
  <img src='https://github.com/user-attachments/assets/894deb59-b417-4a10-b2c5-be00558032b8' width=500 />
</div>
<div align=center>
  <img src='https://github.com/user-attachments/assets/c9fc5d56-d53c-4bcf-ac8c-9c2b48ead2ee' width=200 />
  <img src='https://github.com/user-attachments/assets/c76a432e-3918-47e0-9a6f-2fe7de37bdae' width=450 />
</div>

</details>

<details>  
  <summary><strong>[여행 후기][미들웨어]정세윤</strong></summary>
  
  ### ✅ Done

---

- **미들웨어 설정**

  - 로그인 여부에 따라 특정 페이지 접근 시 `/redirect` 페이지로 이동
  - 쿠키로 전달한 `redirectMode`에 따라 특정 경로로 리다이렉트
  - `RedirectNotice` 컴포넌트 생성
    - `/not-found` 페이지를 `RedirectNotice` 컴포넌트로 분리 및 수정
    - `/not-found`, `/redirect` 페이지에서 사용

- **텍스트 에디터 커스터마이징**

  - 반응형 툴바 구현
  - 기본 글자 스타일 기능 외 리스트 기능 추가
  - 전역 상태를 통해 추가 및 삭제된 이미지 데이터 관리

- **공통 컴포넌트 생성**

  - `Toast`
  - `Pagination`

- **여행 후기 작성 및 수정 페이지**

  - 후기 작성 폼을 `ReviewForm` 컴포넌트로 분리
    - 후기 작성 및 수정 모드에 따른 분기 처리
  - `ThumbnailPicker` 컴포넌트 구현
    - 작성 중 추가된 이미지 중 대표 이미지 설정

- **여행 후기 상세 페이지**

  - 레이아웃 재정비 및 댓글 파트 추가
  - `CommentList`, `CommentItem`, `CommentForm` 컴포넌트 구현
    - `CommentForm`
      - 댓글 작성 및 수정 모드에 따른 분기 처리

- **API**
  - 요구사항 정의서 참고하여 API 요청 및 응답 데이터의 스키마 및 타입 설정
  - RTK Query 코드 임시 작성 (API 나오기 전)
    - `reviewApi`, `commentApi`

### ⚙️ in Progress

---

- 구현 중인 내용
  - 실제 API 연동하여 요청 및 응답 처리
  - 웹소켓

### 🖼️ Preview

---

- 여행 후기 상세 페이지

 <div align=center>
    <img src='https://github.com/user-attachments/assets/615af845-dab2-4bb9-b630-0bb2ffff68fa' width=500 />
 </div>

- 리다이렉트

 <div align=center>
    <img src='https://github.com/user-attachments/assets/a4949052-ec3f-4aac-a670-37038b2028ff' width=500 />
 </div>

- 반응형 텍스트 에디터

 <div align=center>
    <img src='https://github.com/user-attachments/assets/47137a93-64a2-42eb-ab3e-64c072c78233' width=500 />
 </div>

- 토스트

 <div align=center>
    <img src='https://github.com/user-attachments/assets/13dc5dbe-ccc0-47d4-b571-8ba4054f4400' width=500 />
 </div>

- `ThumbnailPicker`

 <div align=center>
    <img src='https://github.com/user-attachments/assets/2b37dd12-9fd5-48de-a250-7bbfebfda20d' width=500 />
 </div>

</details>

<details>  
<summary><strong>[유저(로그인/회원가입)]조유원</strong></summary>
  
  ### :white_check_mark: Done
  <hr>
  
  - **회원정보 수정 폼 컴포넌트** : `/edit-profile`
    - 여행 카드 컴포넌트 구현
    - 카드 별 리뷰 작성 및 삭제 `dropdown` 메뉴 컴포넌트 추가
    - 반응형 적용
  - **공통 컴포넌트 리팩토링**
    - `Select`, `LayerPopup` 컴포넌트
  - **RTK Query로 유저 관련 API 정의** : `api/userApi.ts`
  - **로그인 API 연동 및 사용자 정보 상태 관리**
    - 로그인 GET 요청 및 처리
    - `RTK`, `redux-persist`로 유저 정보 상태 관리
    - 쿠키에 토큰 저장
  - **카카오, 구글 소셜 로그인 구현** : `/kakao/callback`, `/google/callback`
    - 콜백 컴포넌트 구현
  - **회원정보 수정 API 연동** : `/confirm-password`
    - `Redux`에 저장된 유저 정보를 바탕으로 회원정보 수정 폼 구성
    - 소셜, 이메일 로그인 구분
    - 비밀번호 변경, 그 외 유저 정보 변경 PATCH 요청 및 처리 
  - **회원 탈퇴 API 연동**
    - DELETE 요청 코드 작성

### :gear: in Progress

  <hr>
  
  - **로그인 API 연동 및 사용자 정보 상태 관리**
    - 토큰 이슈 정리
    - 자동 로그인 구현
  - **카카오, 구글 소셜 로그인 구현** : `/kakao/callback`, `/google/callback`
    - 구글 리다이렉트 uri 이슈 해결
   
      
  ### :frame_photo: Preview

  <div align='center'>
    <img src='https://github.com/user-attachments/assets/372c46d0-ed8b-4c3e-a4ae-71303e8acc9f' width=500 />
    <img src='https://github.com/user-attachments/assets/bc5ef8dd-e047-4ad6-8d05-5f82f480b729' width=500 />
    <img src='https://github.com/user-attachments/assets/6999a59a-849d-4956-b05b-ac0e9a0bc6fa' width=500 />
  </div>
</details>
  
</details>

<details>
  <summary>3주차 (1/9 ~ 1/15)</summary>

<details>  
<summary><strong>[여행 계획]권여진</strong></summary>
  
### ✅ Done

<hr>

- API 연동

  - 일정 확인 페이지에서 다시 뽑기 버튼 클릭시 api 요청 및 응답 (PATCH)
    - 장소 토글 버튼 활성화 되어있을 시 해당 장소 데이터 같이 보내기
  - 일정 확인 페이지에서 저장 버튼 클릭시 api 요청 및 응답 (POST)
  - 사용자 저장 여행 경로 목록 api 요청 및 응답 (GET)
  - 사용자 저장 여행 경로 목록에서 카드 클릭시 해당 여행 경로 api 요청 및 응답 (GET)
  - 사용자 저장 여행 경로 목록에서 특정 경로 삭제 클릭시 api 요청 및 응답 (DELETE)

- 인증 및 권한 (일정 생성 페이지)

  - 로그인 상태에 따른 기능 제한 (일정 저장)
  - 일정 생성 중: 로그인 후 이전 페이지 리다이렉트 구현
  - 사용자의 저장 경로가 아닌 주소로 들어가려할 시 리다이렉트

- 웹 접근성 및 UI/UX 개선

  - 사용자 저장 여행 경로 목록 카드 레이아웃 개선
  - 카드 삭제 시 확인 레이어팝업 추가
  - 일정 읽기 전용 레이아웃 추가
  - 멀티스텝폼 일정 확인 컴포넌트 최적화
    - 버튼 없는 버전 구현
    - 제목 입력 유효성 검사 추가
  - 저장 경로 페이지 키보드 Tab을 통한 이동 가능(웹 접근성 향상)
  - 저장 경로가 없을 시 내용 분기처리

- 기능
  - 여행 경로 장소별 지도 직선거리 표시
  - 직선 클릭시 네이버 지도로 장소 이동 경로 표시
  - 임시 저장 데이터 관리
    - 로그인 후 데이터 복원
    - 멀티스텝폼 3단계 연동
  - 후기 페이지에 여행 상세 경로 연동

### 🖼️ Preview

 <div align=center>
  <img src='https://github.com/user-attachments/assets/39e2b83d-971e-42fc-b5ab-e1867b0b07c9' width=500 />
  <img src='https://github.com/user-attachments/assets/0381a18c-bcab-47b8-86c1-b1a173e6d432' width=500 />
  <img src='https://github.com/user-attachments/assets/fe7e4555-2a32-474a-bbb7-e7eb2356f554' width=500 />
</div>
 <div align=center>
  <img src='https://github.com/user-attachments/assets/a74441c5-df53-4d0e-ad62-91dd4a48a764' width=500 />
  <img src='https://github.com/user-attachments/assets/8b8b19e7-e2d0-4d08-9a3e-63321fc6bfe5' width=500 />
  <img src='https://github.com/user-attachments/assets/f98c1682-7e90-4d21-8e22-101d70c453e2' width=500 />
</div>
 <div align=center>
  <img src='https://github.com/user-attachments/assets/cae1a15a-eff5-4954-ae8e-a5e6f9b7fadb' width=500 />
  <img src='https://github.com/user-attachments/assets/1c0930f6-dc0e-4a95-9816-bcbab0cdb244' width=500 />
</div>
 <div align=center>
  <img src='https://github.com/user-attachments/assets/2c675c18-9142-471b-8f9f-101f03e96a8d' width=500 />
  <img src='https://github.com/user-attachments/assets/f266da4c-f79b-41e1-b10b-24e0eb10adfe' width=500 />
</div>

</details>

  <details>  
  <summary><strong>[여행 후기][미들웨어]정세윤</strong></summary>
  
  ### ✅ Done

---

- **웹소켓 연결**
  - 여행 후기 좋아요 수 실시간 업데이트 구현
  - 여행 댓글 작성 / 수정 / 삭제 실시간 업데이트 구현
- **API 요청 및 응답 처리**

  - 여행 후기 목록 `GET`
  - 여행 후기 상세 조회 `GET`, 작성 `POST`, 수정 `PATCH`, 삭제 `DELETE`
  - 여행 후기 댓글 목록 `GET`
  - 여행 후기 댓글 작성 `POST`, 수정 `PATCH`, 삭제 `DELETE`
  - 이미지 업로드 `POST`

- **미들웨어 업데이트 및 보완**

  - 로그인하지 않은 사용자가 여행 후기 작성 및 수정 페이지에 접근하지 못하도록 제한

- **ProtectedRoute 컴포넌트 생성**

  - 여행 후기 작성 및 수정 페이지 접근 시, 인가 여부에 따라 해당 라우트를 보호하는 컴포넌트 구현
  - 기존 미들웨어를 보완하여 구현

- **웹 접근성 향상**

  - `Navbar`, `Pagination`, `Dropdown`의 클릭 가능한 요소를 interactive 태그로 변경

- **UX 향상**

  - `LayerPopup` 활성화 시, 오버레이된 영역의 스크롤 방지
  - 페이지 선택 시 화면 최상단으로 이동
  - 페이지네이션 및 정렬 방식을 전역상태로 관리
    - 여행 후기 및 여행 경로 상세 페이지에서 다시 목록으로 돌아올 때, 이전의 페이지와 정렬 방식 유지
    - 관련 없는 페이지 방문 시, 페이지와 정렬 방식 초기화
  - 여행 후기 작성 및 수정 페이지를 벗어날 때 경고 `LayerPopup` 표시
  - `LoadingSpinner`의 표시 조건 업데이트
    - API 요청 성공 시, `isLoading` 뿐만 아니라 `isSuccess` 시에도 `LoadingSpinner` 표시
    - 페이지 전환이 되는 경우 페이지 전환이 될 때까지 LoadingSpinner 유지

- **여행 후기 목록 정렬 기능 추가**

  - 날짜, 좋아요 수, 댓글 수 기준으로 오름차순 및 내림차순 정렬 기능 구현

- **랜딩페이지 인터랙션 개선**

  - 여행 일정 생성 방법 프리뷰 추가
  - 스크롤 시 배경색 변하는 훅 생성
  - 모션을 이용한 스크롤 애니메이션 추가
  - 스와이퍼를 이용한 여행 후기 carousel 효과 적용

- **Footer 컴포넌트 생성**

  - 모션을 이용한 애니메이션 추가
  - 경로별 Footer 숨기기 코드 추가

- **`TravelCard`의 `Dropdown` 조건부 메뉴 표시**

  - 후기 작성 여부에 따라 메뉴 분기 처리
    - 후기 미작성 시: 후기 작성 메뉴 표시
    - 후기 작성 시: 후기 보러가기 메뉴 표시

- **Toast 컴포넌트 전역 상태 관리 추가**

  - 페이지 전환 시에도 Toast 사라지지 않도록 전역 상태로 수정

- **레이아웃 조정**

  - main에 해당하는 부분 높이 조정
  - 페이지별 가로세로 중앙정렬 조정
  - 일정 생성 페이지 레이아웃 조정

- **`Header` 내 구조 개선**
  - `Logo` 컴포넌트를 `Navbar` 컴포넌트보다 위쪽으로 변경

### 🖼️ Preview

---

- 웹소켓을 통한 좋아요 수, 댓글 실시간 업데이트

 <div align=center>
    <img src='https://github.com/user-attachments/assets/38aa288f-b523-4e07-82bf-91c41b086ac3' width=500 />
 </div>

- 랜딩페이지

 <div align=center>
    <img src='https://github.com/user-attachments/assets/fd691da8-ffab-4bc6-b852-e010a70336a5' width=500 />
 </div>

 <div align=center>
    <img src='https://github.com/user-attachments/assets/e831ab1e-e704-444b-9a8e-36106ba34f49' width=500 />
 </div>

- `Footer`

 <div align=center>
    <img src='https://github.com/user-attachments/assets/b208ba69-e8cd-4e3f-aa9c-29772727aefb' width=500 />
 </div>

- 여행 후기 목록 정렬

 <div align=center>
    <img src='https://github.com/user-attachments/assets/7bf4f8f0-635f-4ca4-8e55-430566b5e224' width=500 />
 </div>

- `LoadingSpinner`

 <div align=center>
    <img src='https://github.com/user-attachments/assets/51f07dee-4141-4490-bea4-355dae9829a2' width=500 />
 </div>

- `Toast` 전역 상태 관리

 <div align=center>
    <img src='https://github.com/user-attachments/assets/be7dbab0-3088-4fdc-b5bd-5611f543df0e' width=500 />
 </div>
</details>

<details>  
  <summary><strong>[유저(로그인/회원가입)]조유원</strong></summary>
  
  ### ✅ Done

---

- **카카오, 구글 소셜 로그인 구현** : `/kakao/callback`, `/google/callback`
  - 구글 리다이렉트 uri 이슈 해결
- **자동 로그인 구현**

  - 토큰 유효기간 로컬 스토리지에 저장
  - 자동 로그인 O - 액세스 토큰 자동 재발급
  - 자동 로그인 X - 1일간 로그인 유지 후 로그인 만료 처리
  - 로그인 만료 시 토스트 팝업 노출
    - 로컬 스토리지에 토스트 팝업 노출 여부를 담아, 한 번만 토스트 팝업이 노출되도록 함.
  - 로그인 전용 페이지에서 로그인 만료 시 리다이렉트 페이지로 이동
  - httpOnly 토큰 시도했으나.. 실패

- **레이아웃 수정**
  - 반응형 레이아웃 수정으로 잘림 현상 해결

### 🖼️ Preview

---

- 구글 로그인

 <div align=center>
    <img src="https://github.com/user-attachments/assets/483408ac-dbd2-4d77-af1f-9eaa5ed5f679" alt="GoogleLogin">
 </div>

</details>

</details>
