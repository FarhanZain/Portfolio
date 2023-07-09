import { useState } from "react";
import Modal from "./Modal";

export default function CardUI(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          document.body.style.overflow = "hidden";
        }}
        className="p-5 rounded-xl shadow-lg w-[270px] bg-white hover:bg-gradient-to-b from-[#ECE9FF] to-[#F1FDFF] cursor-pointer"
      >
        <img
          className="w-full bg-slate-600 rounded-lg"
          src={props.gambar}
          alt=""
        />

        <h1 className="mt-3 font-righteous text-lg md:text-xl">
          {props.Judul}
        </h1>
      </button>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          document.body.style.overflow = "unset";
        }}
      >
        {/* <!-- Modal body --> */}
        <div className="p-6 space-y-3 lg:space-y-0 space-x-0 lg:space-x-8 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img className="rounded-lg" src={props.gambar} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-lg lg:text-2xl mb-5 font-righteous font-medium">
              {props.Judul}
            </h1>
            <p className="text-base font-robotomono leading-relaxed text-black ">
              {props.deskripsi}
            </p>
          </div>
        </div>

        {/* <!-- Modal footer --> */}
        <div className="flex items-center justify-end p-6 space-x-2 rounded-b">
          <a
            href={props.figma}
            target="_blank"
            type="button"
            className="text-white bg-pink-700 hover:bg-pink-800  rounded-lg text-sm font-medium px-5 py-2.5"
          >
            Figma
          </a>
        </div>
      </Modal>
    </>
  );
}
