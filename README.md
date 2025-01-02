<details>
<summary>1주차 (12/26 ~ 1/1)</summary>
  <details>  
<summary><strong>정세윤</strong></summary>
  
  ### :white_check_mark: Done

---
  
  - **와이어 프레임**
    - 전체적인 페이지 구성 및 기본 레이아웃 설계
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

### :gear: in Progress

---
  
  - 구현 중인 내용
    - Tiptap 텍스트 에디터에서 사진 업로드 기능 추가
    - 여행 후기 상세 페이지: `/travel-reviews/detail/:reviewId`
    - 후기 작성 스키마 설정

### :books: Next

---
  
  - 구현 예정
    - 여행 후기 페이지 API 연동
    - 웹소켓을 이용한 실시간 댓글 및 좋아요 업데이트
   
### :frame_photo: Preview
  
---

  - 공통 컴포넌트
  
![commonComponents](https://gist.github.com/user-attachments/assets/5a47a9c5-e218-4c58-a8a7-da191d11b817)

![header](https://gist.github.com/user-attachments/assets/ef9497b1-7af9-45df-bf24-32717bee4dea)

  - 여행 후기 페이지

<img width="1136" alt="createReview" src="https://gist.github.com/user-attachments/assets/822d6779-7ed0-4915-a87a-09cff2b40030" />

  
![rating](https://gist.github.com/user-attachments/assets/b7c5d5ba-55fb-4813-a6a8-6148a55e6668)
  
<img width="1136" alt="reviewList" src="https://gist.github.com/user-attachments/assets/aea2ca3e-11d8-48a6-82f8-ea4504c6db58" />

<img width="1136" alt="reviewDetail" src="https://gist.github.com/user-attachments/assets/57c13172-6137-4ee9-8392-443bfc0448b6" />


  
  - Not Found 페이지
  
<img width="1136" alt="notFound" src="https://gist.github.com/user-attachments/assets/1b64cff9-21e2-4e0f-b0af-0ac8ede02d55" />


  
</details>
</details>
