"use client"
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import SelectUser from "../SelectUserComponent/SelectUser";
import { useGlobalContext } from "@/context/useContext";
import { Dispatch, SetStateAction, useState } from "react";

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
  const [isError, setIsError] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleFieldChange = (e: any) => {
    setPostVal({
      ...postVal,
      [e.target.name]: e.target.value,
    });
  };
  const handleErrorAndPostAdd = () => {
    if(postVal.title.length == 0){
      setIsError(true)
      setError('Title can not be empty.')
    } else if(postVal.desc.length == 0){
      setIsError(true)
      setError('Description can not be empty.')
    } else {
      setIsError(false)
      setError('')
      setIsOpenAddPostModal(false)
      handlePostAdd()
    }
  }
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
              required
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
              required
              placeholder="description"
              onChange={handleFieldChange}
              className="bg-white border-2 border-black/90 rounded-lg py-1.5 pr-8 pl-3 text-sm/6"
            />
          </div>
          {isError && (
            <div className="w-full bg-white/70 border border-black/70 rounded-lg py-2 my-3 text-red-700 font-[500] text-md text-center">{error}</div>
          )}
          <div
            onClick={handleErrorAndPostAdd}
            className="bg-black/90 duration-300 linear hover:bg-black rounded-lg w-full text-white py-2 px-4 text-center cursor-pointer"
          >
            Add Post
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
