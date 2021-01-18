import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useUserMetaData } from '../../hooks/user-metadata-hooks';
import NavBar from '../../shared/nav-bar/nav-bar';
import SettingsPageContainer from './settings-page-container/settings-page-container';

export interface ISettingsPage {}

export interface IUserAccountDetails {
  firstName: string;
  lastName: string;
}

export const SettingsPage: React.FC<ISettingsPage> = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const history = useHistory();
  const { userInfo, isFirstLogin } = useUserMetaData();

  console.log(
    "--user info--",
    userInfo,
    userInfo?.user_metadata?.first_name ?? null,
    userInfo?.user_metadata?.last_name ?? null,
    isFirstLogin
  );
  const { register, handleSubmit, errors } = useForm();

  const payload = {
    user_metadata: {
      first_name: "Jedidiahhhh",
      last_name: "Rojas",
    },
  };

  const onSubmit = async () => {
    let accessToken;
    try {
      accessToken = await getAccessTokenSilently({
        audience: "https://dev-k8hhju21.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      });
    } catch (e) {
      throw e;
    }

    await fetch(`https://dev-k8hhju21.us.auth0.com/api/v2/users/${user.sub}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => console.log("--successfully updated user--", user))
      .catch((e) => console.log("--error--", e));

    if (isFirstLogin) {
      // TODO: go to continue endpoint
      // history.push(`https://dev-k8hhju21.us.auth0.com/continue?state=${state}`);
    } else {
      // TODO: change message on page to 'changes saved!' or something
      console.log("--changes saved!--");
    }
  };

  useEffect(() => {
    console.log("--user--", user);
  }, [user]);

  return (
    <SettingsPageContainer>
      <NavBar />

      {isFirstLogin && (
        <div>
          Please fill in your first name and last name to complete registration!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register({ required: true })} />
        <input name="lastName" ref={register({ required: true })} />
        {errors.firstName && <span>This field is required</span>}
        {errors.lastName && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </SettingsPageContainer>
  );
};

export default SettingsPage;

// TODO: Must do today:
// user login, and let user add settings (first name, last name, profile picture (unique color as default))
// FIGURE OUT AWS IMAGES this has to be done eventually, "just do it" now YOU GOT THIS
// set up settings page so user can see what they set
// give user option (on settings page) to edit theirs settings
