import { create } from 'zustand';

const useImagePreview = create((set, get) => ({
  isOpen: false,
  imgSrc: null,
  alt: null,
  height: null,
  width: null,
  open: ({ imgSrc, alt, height, width }) => {
    if (get().isOpen) return;
    set(() => ({
      isOpen: true,
      imgSrc,
      alt,
      height,
      width,
    }));
  },
  close: () => {
    set(() => ({
      isOpen: false,
    }));
  },
  clear: () => {
    set(() => ({
      imgSrc: null,
      alt: null,
      height: null,
      width: null,
    }));
  },
}));

export default useImagePreview;
