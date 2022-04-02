import create from 'zustand';
import { persist } from 'zustand/middleware';

const useDarkMode = create(
  persist(
    (set, get) => ({
      dark: null,
      getMode: () => {
        const state = get().dark;

        // if not set up yet init with user OS preference
        if (state === null) {
          const dark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
          get().setMode(dark);
          return dark;
        }

        return state;
      },
      setMode: (nDark) => {
        // tailwind in class mode -> we need to set the dark class on the html element
        if (nDark) {
          document.querySelector('html').classList.remove('dark');
        } else {
          document.querySelector('html').classList.add('dark');
        }

        set(() => ({
          dark: nDark,
        }));
      },
    }),
    {
      name: 'darkModeStorage',
      getStorage: () => window.localStorage,
    }
  )
);

export default useDarkMode;
