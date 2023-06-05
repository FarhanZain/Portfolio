export default function Modal({ open, onClose, children }) {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div
        // id={props.modalID}
        onClick={onClose}
        className={`fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur w-full p-4 overflow-x-hidden overflow-y-auto h-full ${
          open ? "visible" : "invisible"
        } `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-full"
        >
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 rounded-t ">
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                // data-modal-hide={props.modalID}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* <!-- Modal body --> */}
            {/* <div className="p-6 space-y-3">
              <img className="w-full rounded-lg" src={props.gambar} alt="" />
              <h1 className="text-lg font-righteous font-medium">
                {props.judul}
              </h1>
              <p className="text-base font-robotomono leading-relaxed text-black ">
                {props.deskripsi}
              </p>
              <p className="text-base font-robotomono leading-relaxed text-black ">
                {props.responsive}
              </p>
              <p className="text-base font-robotomono leading-relaxed text-black ">
                {props.tech}
              </p>
            </div> */}

            {/* <!-- Modal footer --> */}
            {/* <div className="flex items-center justify-end p-6 space-x-2 rounded-b">
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
            </div> */}

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
