import { useState } from "react";
import Modal from "./Modal";

export default function CardProject(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        // data-modal-target={props.modalID}
        // data-modal-toggle={props.modalID}
        onClick={() => setOpen(true)}
        className="p-5 rounded-xl shadow-lg w-[270px] cursor-pointer"
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

      <Modal open={open} onClose={() => setOpen(false)}>
        {/* <!-- Modal body --> */}
        <div className="p-6 space-y-3">
          <img className="w-full rounded-lg" src={props.gambar} alt="" />
          <h1 className="text-lg font-righteous font-medium">{props.Judul}</h1>
          <p className="text-base font-robotomono leading-relaxed text-black ">
            {props.deskripsi}
          </p>
          <p className="text-base font-robotomono leading-relaxed text-black ">
            {props.responsive}
          </p>
          <p className="text-base font-robotomono leading-relaxed text-black ">
            {props.tech}
          </p>
        </div>

        {/* <!-- Modal footer --> */}
        <div className="flex items-center justify-end p-6 space-x-2 rounded-b">
          <a
            href={props.github}
            target="_blank"
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Github
          </a>
          <a
            href={props.web}
            target="_blank"
            type="button"
            className="text-white bg-purple-800 hover:bg-purple-900  rounded-lg text-sm font-medium px-5 py-2.5"
          >
            Kunjungi
          </a>
        </div>
      </Modal>
    </>
  );
}
