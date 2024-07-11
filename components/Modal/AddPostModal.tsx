import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import SelectUser from "../SelectUserComponent/SelectUser";
import { useGlobalContext } from "@/context/useContext";
import { Dispatch, SetStateAction } from "react";

interface IAddPostModal {
  openAddPostModal: boolean;
  setIsOpenAddPostModal: (openAddPostModal: boolean) => void;
  postVal: {
    title: string;
    desc: string;
  };
  setPostVal: Dispatch<
    SetStateAction<{
      title: string;
      desc: string;
    }>
  >;
}

export default function AddPostModal({
  openAddPostModal,
  setIsOpenAddPostModal,
  postVal,
  setPostVal
}: IAddPostModal) {
  const { users, handlePostAdd } = useGlobalContext();

  const handleFieldChange = (e: any) => {
    setPostVal({
      ...postVal,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Dialog
      open={openAddPostModal}
      onClose={() => setIsOpenAddPostModal(false)}
      className="relative z-50 w-52"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <DialogBackdrop className="fixed inset-0 bg-black/70" />
      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <DialogPanel className="w-[400px] space-y-4 bg-white/95 text-black rounded-[12px] px-8 py-12">
          <DialogTitle className="font-bold">Add Post</DialogTitle>
          <div className="flex flex-col mt-4">
            <div className="font-[500]">Select User</div>
            {users.length > 0 && (
              <SelectUser
                users={users}
              />
            )}
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="title" className="font-[500]">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={handleFieldChange}
              className="bg-white border-2 border-black/90 rounded-lg py-1.5 pr-8 pl-3 text-sm/6"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="desc" className="font-[500]">
              Description
            </label>
            <textarea
              rows={5}
              name="desc"
              placeholder="description"
              onChange={handleFieldChange}
              className="bg-white border-2 border-black/90 rounded-lg py-1.5 pr-8 pl-3 text-sm/6"
            />
          </div>
          <div
            onClick={handlePostAdd}
            className="bg-black/90 duration-300 linear hover:bg-black rounded-lg w-full text-white py-2 px-4 text-center cursor-pointer"
          >
            Add Post
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
