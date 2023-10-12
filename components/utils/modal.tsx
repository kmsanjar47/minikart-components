"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

function modal() {
  let [isOpen, setIsOpen] = useState(false);

  let toggleModal = () => {
    setIsOpen(isOpen!);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 h-full w-full overflow-y-auto">
        <div className="flex h-full w-full items-center justify-center">
          <Dialog.Panel className="mx-auto w-full h-full rounded bg-white">
            <Dialog.Title>Complete your order</Dialog.Title>

            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>

            <button onClick={() => toggleModal}>Cancel</button>
            <button onClick={() => toggleModal}>Deactivate</button>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
export default modal;
