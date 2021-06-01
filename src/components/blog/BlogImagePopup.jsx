import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import useImagePreview from '../../state/useImagePreview';

export default function BlogImagePopup() {
  const { isOpen, close, clear, imgSrc, alt, width, height } =
    useImagePreview();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={close}
      >
        <div
          className="min-h-screen pt-4 px-4 pb-20 text-center"
          style={{ maxHeight: '100vh' }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => clear()}
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-lg transition-opacity overflow-hidden" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="rounded-lg inline-block z-50 overflow-hidden transform transition-all select-none bg-white shadow-lg mt-8">
              <div className="text-right m-2">
                <button
                  type="button"
                  className="p-1 rounded text-gray-500 hover:text-gray-900 focus:outline-none ring-inset focus:ring-2 focus:ring-red-300"
                  onClick={close}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="m-2 cursor-move bg-gray-100 shadow-inner">
                <TransformWrapper wheel={{ step: 12 }}>
                  <TransformComponent>
                    <img
                      width={width}
                      height={height}
                      src={imgSrc}
                      className="object-contain"
                      alt={alt}
                      style={{
                        maxWidth: '85vw',
                        maxHeight: '85vh',
                        width,
                        height,
                      }}
                    />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
