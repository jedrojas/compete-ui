import { useEffect } from 'react';

import { useUserMetaData } from './user-metadata-hooks';

export const useFirstAndLastNameCheck = () => {
  const { userInfo } = useUserMetaData();

  useEffect(() => {
    console.log("--INSIDE USE EFFECT--", userInfo);
  }, [userInfo]);

  console.log("--user info--", userInfo);
  const firstName = userInfo?.user_metadata?.first_name ?? null;
  const lastName = userInfo?.user_metadata?.last_name ?? null;

  //   console.log("--debugging", firstName, lastName);

  if (!firstName || !lastName) {
    // display pop up or redirect to settings page
    console.log("--please enter first and last name to complete sign up--");
    return true;
  } else {
    console.log("--you already got yo first and last name--");
    return false;
  }
};
