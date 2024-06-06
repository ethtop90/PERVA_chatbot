// Header.tsx
import React, { ReactNode } from 'react';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store'; // Update the path accordingly
import { login, logout } from '../../reducers/authSlice'; // Update the path accordingly

interface IProps {
  leftNode?: ReactNode;
}

export function Header(props: IProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-between w-full px-4 py-4 bg-frame-bg-color md:px-12">
      <a href="/" className="text-white text-40 md:text-base">
        PERVA_チャットボット
      </a>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <Button asChild className="rounded-full" onClick={handleLogout}>
              {t('logout')}
            </Button>
          </>
        ) : (
          <>
            <Button asChild className="rounded-full" onClick={handleLogin}>
              {t('signin')}
            </Button>
            <Button asChild className="rounded-full">
              <a href="/signup">{t('signup')}</a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
