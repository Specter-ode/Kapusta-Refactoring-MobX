import authStore from './authStore';
import transactionStore from './transactionStore';
import { injectStores } from '@mobx-devtools/tools';

injectStores({
  authStore,
  transactionStore,
});
export { authStore, transactionStore };
