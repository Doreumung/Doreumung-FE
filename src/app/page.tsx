'use client';
import Dropdown from '@/components/common/dropdown/dropdown';

const Home = () => {
  const handleAction = (message: string) => {
    // 페이지 이동 or 편집 관련 코드 작성
    console.log(message);
  };

  return (
    <div className="">
      <Dropdown
        variant="navbar"
        options={[
          { label: '회원정보 수정', action: () => handleAction('회원정보 수정') },
          { label: '저장한 경로', action: () => handleAction('저장한 경로') },
          { label: '로그아웃', action: () => handleAction('로그아웃') },
        ]}
      />

      <Dropdown
        variant="edit"
        options={[
          { label: '리뷰 작성', action: () => handleAction('리뷰 작성') },
          { label: '삭제', action: () => handleAction('삭제') },
        ]}
      />
    </div>
  );
};

export default Home;
