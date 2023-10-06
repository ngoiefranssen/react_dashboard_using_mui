import create from 'zustand';
import { persist } from 'zustand/middleware';

const appStore = set => ({
  dIsOpen: true,
  data: [],
  setData: data => set(state => ({ data: data })),
  updateOpen: dIsOpen => set(state => ({ dIsOpen: dIsOpen })),
});

appStore = persist(appStore, { name: 'my_app_store' });
export const useAppStore = create(appStore);
