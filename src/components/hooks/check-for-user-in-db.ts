import { useEffect, useState } from 'react';

import { IUser } from '../../models/data-models';

// TODO - Jed: can get rid of this component (is unused)
export const useCheckForUserInDb = (user: IUser | null, loading: boolean) => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      setShowSignUpModal(true);
    } else {
      setShowSignUpModal(false);
    }
  }, [loading, user]);

  return { showSignUpModal, setShowSignUpModal };
};
