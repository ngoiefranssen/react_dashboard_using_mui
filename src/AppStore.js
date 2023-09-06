import create from 'zustand';
import { persist } from 'zustand/middleware';

const appStore = set => ({
  dopen: true,
  updateOpen: dopen => set(state => ({ dopen: dopen })),
});

const appStore_ = persist(appStore, { name: 'my_app_store' });
export const useAppStore = create(appStore);

// 12:16
