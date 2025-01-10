# 도르멍

## 프론트 팀원 소개

<div align="center">
  <table>
    <thead>
      <tr>
        <th><strong>권여진</strong></th>
        <th><strong>정세윤</strong></th>
        <th><strong>조유원</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://github.com/Kwonyeojiny">
            <img src="https://avatars.githubusercontent.com/u/78148876?v=4" height="150" width="150" alt="Kwonyeojiny"/><br/>
            @Kwonyeojiny
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/seyoonagain">
            <img src="https://avatars.githubusercontent.com/u/167067892?v=4" height="150" width="150" alt="seyoonagain"/><br/>
            @seyoonagain
          </a>
        </td>
        <td align="center">
          <a href="https://github.com/xuuwon">
            <img src="https://avatars.githubusercontent.com/u/181433031?v=4" height="150" width="150" alt="xuuwon"/><br/>
            @xuuwon
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 프로젝트 소개
- 도르멍 - 제주의 하루를 선물해 드립니다

## 프로젝트 기술 스택

## 체인지로그

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
</details>
