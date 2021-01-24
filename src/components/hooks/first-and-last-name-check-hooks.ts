import { useEffect, useState } from 'react';

import { useGetUserMetaData } from './user-metadata-hooks';

export const useFirstAndLastNameCheck = () => {
  const { userInfo, loading } = useGetUserMetaData();
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const firstName = userInfo?.user_metadata?.first_name ?? null;
    const lastName = userInfo?.user_metadata?.last_name ?? null;

    if (loading) {
      setShowSignUpModal(false);
    } else {
      if (!firstName || !lastName) {
        setShowSignUpModal(true);
      } else {
        setShowSignUpModal(false);
      }
    }
  }, [userInfo, loading]);

  return { showSignUpModal, setShowSignUpModal };
};
