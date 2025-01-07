import { useState } from 'react';
import { UseNavigationPopupReturn } from './types';
import { useRouter } from 'next/navigation';

const useNavigationPopup = (): UseNavigationPopupReturn => {
  const [showNavigationPopup, setShowNavigationPopup] = useState(false);
  const [navigationPath, setNavigationPath] = useState('');
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setNavigationPath(path);
    setShowNavigationPopup(true);
  };

  const handleNavigationConfirm = () => {
    setShowNavigationPopup(false);
    if (navigationPath) {
      router.push(navigationPath);
    } else {
      router.back();
    }
  };

  const handleNavigationCancel = () => {
    setShowNavigationPopup(false);
  };

  return {
    showNavigationPopup,
    navigationPath,
    handleNavigation,
    handleNavigationConfirm,
    handleNavigationCancel,
  };
};

export default useNavigationPopup;
