export default function CardProject(props) {
  return (
    <>
      <div className="p-5 rounded-xl shadow-lg w-[270px] cursor-pointer">
        <div className="w-full h-[150px] bg-slate-600 rounded-lg"></div>
        <h1 className="mt-3 font-righteous text-lg md:text-xl">
          {props.Judul}
        </h1>
      </div>
    </>
  );
}
