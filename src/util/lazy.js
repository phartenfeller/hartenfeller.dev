import { lazy } from 'react';
import waitMs from './waitMs';

function lazyLoad(componentImportFn, delaySeconds = 0) {
  return lazy(async () => {
    await waitMs(delaySeconds * 1000);
    const obj = await componentImportFn();
    return typeof obj.default === 'function' ? obj : obj.default;
  });
}

export default lazyLoad;
