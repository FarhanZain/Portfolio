export default function CardProject(props) {
  return (
    <>
      <button
        data-modal-target={props.modalID}
        data-modal-toggle={props.modalID}
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
    </>
  );
}
