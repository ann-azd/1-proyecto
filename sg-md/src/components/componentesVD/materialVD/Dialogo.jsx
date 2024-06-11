import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function DialogoModificar({
  isOpen,
  onConfirm,
  onCancel,
  tipo,
}) {
  //   let [isOpen, setIsOpen] = useState(true);

  return (
    // <Dialog open={isOpen} onClose={onCancel}>
    //   <Dialog.Panel>
    //     <Dialog.Title>Panel de Confirmación</Dialog.Title>
    //     <Dialog.Description>
    //       Confirma o cancela
    //     </Dialog.Description>

    //     <p>
    //       ¿Está seguro que se desea modificar este material del inventario?
    //     </p>

    //     <button onClick={onConfirm}>Confirmar</button>
    //     <button onClick={onCancel}>Cancel</button>
    //   </Dialog.Panel>
    // </Dialog>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Advertencia
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {tipo === "modificar"
                      ? "Está usted seguro que desea modificar este material del inventario. Si confirma no podrá deshacer los cambios"
                      : "Está usted seguro que desea eliminar este material del inventario. Si confirma no podrá deshacer los cambios"}
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex  rounded-md border border-transparent bg-green-400 px-4 py-2 text-lg font-medium text-slate-900 hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onConfirm}
                  >
                    Confirmar
                  </button>
                  <button
                    type="button"
                    className="inline-flex  rounded-md border border-transparent bg-red-200 px-4 py-2 ml-2 text-lg font-medium text-slate-900 hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onCancel}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
