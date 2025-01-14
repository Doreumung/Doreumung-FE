export type BackNavigationProps = {
  to: 'home' | 'reviewList' | 'review';
  reviewId?: number;
  onNavigate?: (path: string) => void;
};
