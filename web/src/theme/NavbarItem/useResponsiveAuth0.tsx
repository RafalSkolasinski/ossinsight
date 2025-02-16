import { useAuth0 } from '@auth0/auth0-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemoizedFn } from 'ahooks';
import { BaseLoginOptions } from '@auth0/auth0-spa-js';
import { useGtag } from '@site/src/utils/ga';
// import { Theme } from '@mui/material/styles';

declare global {
  function gtag (
    command: string,
    fields: string,
    params: any,
  ): void;
}

interface LoginMethodOptions extends BaseLoginOptions {
  triggerBy?: string;
}

type LoginMethod = (options?: LoginMethodOptions) => Promise<void>;

export function useResponsiveAuth0 () {
  const { loginWithPopup, loginWithRedirect, ...others } = useAuth0();
  // const matches = useMediaQuery((theme: Theme) => theme?.breakpoints.up('md'));
  const matches = useMediaQuery('(min-width:600px)');
  const { gtagEvent } = useGtag();

  const redirectLoginWithState: LoginMethod = useMemoizedFn(async (options) => {
    const path =
      typeof window !== 'undefined'
        ? window.location.href.replace(window.location.origin, '')
        : '';
    return await loginWithRedirect({
      ...options,
      appState: { returnTo: path },
    });
  });

  const login: LoginMethod = useMemoizedFn(async ({ triggerBy, ...options }: LoginMethodOptions = {}) => {
    if (typeof gtag !== 'undefined') {
      gtagEvent('trigger_login', {
        trigger_login_by: triggerBy,
      });
    }
    const width = 856;
    const height = 600;
    const left = window.screenX + (window.innerWidth - width) / 2;
    const top = window.screenY + (window.innerHeight - height) / 2;
    const popup = window.open(
      // @ts-expect-error
      {},
      'auth0:authorize:popup',
      `left=${left},top=${top},width=${width},height=${height},resizable,scrollbars=yes,status=1`,
    );
    if (matches) {
      return await loginWithPopup(options, {
        popup,
      });
    } else {
      return await redirectLoginWithState(options);
    }
  });

  return { login, ...others };
}
