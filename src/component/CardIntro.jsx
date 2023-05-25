export default function CardIntro(props) {
  return (
    <>
      <div className="w-[200px] md:w-[250px] flex items-center p-[10px] rounded-lg shadow-lg">
        <div className="mr-3 ">{props.Icon}</div>
        <div className="w-full">
          <p className="font-righteous text-[15px] md:text-lg text-hitam">
            {props.Text}
          </p>
        </div>
      </div>
    </>
  );
}
