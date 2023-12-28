"use client"
import { useRef } from "react";

const TestComponent = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };
  return (
    <div>
      <button className="btn" onClick={openModal}>Open Modal</button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box text-black">
          <form method="dialog">
            {/* Close button will close the modal */}
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modalRef.current?.close()}>
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TestComponent;