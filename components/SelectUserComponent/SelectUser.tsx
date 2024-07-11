"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { Users } from "../types/types";
import { useGlobalContext } from "@/context/useContext";

interface ISelectUser {
  users: Users[];
}

export default function SelectUser({
  users,
}: ISelectUser) {
  const [query, setQuery] = useState("");
  const {selected, setSelected} = useGlobalContext()

  const filteredPeople =
    query === ""
      ? users
      : users.filter((selected) => {
          return selected.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-full">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
        onClose={() => setQuery("")}
        __demoMode
      >
        <div className="relative cursor-pointer">
          <ComboboxButton className={`w-full`}>
            <ComboboxInput
              className={
                "w-full rounded-lg cursor-pointer bg-white text-black border-2 border-black/70 py-1.5 pr-8 pl-3 text-sm/6 text-black"
              }
              displayValue={(person: Users | null) => person?.name || ""}
              onChange={(event) => setQuery(event.target.value)}
            />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={
            "w-[var(--input-width)] rounded-xl text-black border-2 border-black/70 bg-white mt-4 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 h-[200px]"
          }
        >
          {filteredPeople.map((person) => (
            <ComboboxOption
              key={person.id}
              value={person}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:text-white data-[focus]:bg-blue-700"
            >
              <div className="text-sm/6 ">{person.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
