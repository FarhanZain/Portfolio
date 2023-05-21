export default function CardProject(props) {
  return (
    <>
      <div className="p-5 rounded-xl shadow-lg w-[270px]">
        <div className="w-full h-[150px] bg-slate-600 rounded-lg"></div>
        <h1 className="mt-3 font-righteous text-xl md:text-2xl">
          {props.Judul}
        </h1>
      </div>
    </>
  );
}
