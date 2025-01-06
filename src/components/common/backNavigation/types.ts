export type BackNavigationProps = {
  to: 'home' | 'reviewList' | 'review';
  reviewId?: string;
  onNavigate?: (path: string) => void;
};
