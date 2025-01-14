export type BackNavigationProps = {
  to: 'home' | 'reviewList' | 'review' | 'mytravelList';
  reviewId?: number;
  onNavigate?: (path: string) => void;
};
