/**
 * The ToastMessage component in TypeScript React displays children elements with a toast notification
 * using react-hot-toast.
 * @param  - The code snippet you provided is a React component called `ToastMessage` that renders
 * children components along with a `Toaster` component from the `react-hot-toast` library. The
 * `ToastMessage` component takes a single prop `children` of type `React.ReactNode`, which represents
 * the content that will
 * @returns The `ToastMessage` component is being returned, which is a React functional component that
 * takes in children as props and renders them along with the `Toaster` component from the
 * `react-hot-toast` library.
 */
import { Toaster } from 'react-hot-toast';

export const ToastMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};