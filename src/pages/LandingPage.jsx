import Navbar from "../component/Navbar";
import Image from "../assets/Image";
import CardIntro from "../component/CardIntro";
import CardProject from "../component/CardProject";
import Data from "./Data";
import DataUI from "./DataUI";
import CardUI from "../component/CardUI";

export default function LandingPage() {
  const cardFe = Data.map((cardFe) => (
    <CardProject
      key={cardFe.id}
      gambar={cardFe.gambar}
      Judul={cardFe.judul}
      deskripsi={cardFe.deskripsi}
      href={cardFe.href}
      responsive={cardFe.responsive}
      tech={cardFe.tech}
      github={cardFe.github}
      web={cardFe.web}
    />
  ));
  const cardUI = DataUI.map((cardUI) => (
    <CardUI
      key={cardUI.id}
      gambar={cardUI.gambar}
      Judul={cardUI.judul}
      deskripsi={cardUI.deskripsi}
      figma={cardUI.figma}
    />
  ));
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-b from-[#ECE9FF] to-[#F1FDFF] px-[30px] md:px-[100px]">
        <Navbar />
        <div className="flex flex-col items-center text-center mt-8 md:flex-row md:justify-around md:text-start md:items-start">
          <h1 className="text-primary font-righteous text-3xl md:text-5xl md:order-1 md:mt-20 md:w-[300px]">
            Halo,<br></br> Saya Farhan
          </h1>
          <p
            className="text-hitam font-robotomono text-base mt-2 md:order-3 md:mt-24 md:w-[300px] md:text-3xl md:text-center
          "
          >
            Junior <br className="hidden md:block" /> Front End Web
          </p>
          <div className="flex justify-center mt-2 md:order-2">
            <img
              className="h-[303px] md:h-[500px]"
              src={Image.fotoProfile}
              alt="Foto Farhan"
            />
          </div>
        </div>
      </header>

      {/* perkenalan */}
      <section
        id="perkenalan"
        className="px-[30px] md:px-[100px] md:py-[70px]  mt-10"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="text-center md:text-start">
            <h1 className="font-righteous text-primary text-xl md:text-2xl">
              Perkenalkan
            </h1>
            <p className="font-robotomono text-hitam text-[15px] mt-3 md:text-base">
              Saya Farhan Abdurrahman Zain, panggilan saya Farhan, saya
              mahasiswa teknik informatika dari Politeknik Negeri Batam, saya
              tinggal di Batam, Kepulauan Riau. saya sedang mendalami web
              development khususnya bagian front end.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2">
            <CardIntro
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="text-primary w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z"
                  />
                </svg>
              }
              Text="Bertanggung Jawab"
            />
            <CardIntro
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="text-primary w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z"
                  />
                </svg>
              }
              Text="Mau Belajar"
            />
            <CardIntro
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-secondary w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm40 112H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Z"
                  />
                </svg>
              }
              Text="Pembelajar yang lambat"
            />
            <CardIntro
              Icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-secondary w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm40 112H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Z"
                  />
                </svg>
              }
              Text="Short Term Memory"
            />
          </div>
        </div>
      </section>

      {/* Pengalaman */}
      <section className="px-[30px] py-[20px] md:px-[100px] md:py-[70px] mt-10 bg-gradient-to-b from-[#F1FDFF] to-[#ECE9FF]">
        <h1 className="font-righteous text-primary text-xl md:text-2xl mb-2 text-center md:text-start">
          Pengalaman
        </h1>
        <ol className="relative border-l border-gray-300">
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xs md:text-sm font-robotomono text-hitam">
              Februari - Juni 2023
            </time>
            <h3 className="text-base md:text-xl font-righteous text-hitam">
              Studi Independen Web Development
            </h3>
            <p className="text-sm md:text-base font-robotomono text-hitam">
              Program MSIB kampus merdeka di mitra Infinite Learning Indonesia,
              mempelajari Web Development seperti UI/UX design, Frontend web,
              Backend web, dan softskill seperti leadership, public speaking,
              dan management team.
            </p>
            <p className="text-sm md:text-base font-robotomono font-semibold text-hitam mt-3">
              Berikut project yang dikerjakan :
            </p>
            <p className="text-sm md:text-base font-robotomono text-hitam">
              - Micro Project sebagai UI/UX Designer (Hipster)
            </p>
            <p className="text-sm md:text-base font-robotomono text-hitam">
              - Macro Project sebagai Coder Front-end (Hacker)
            </p>
            <p className="text-sm md:text-base font-robotomono text-hitam">
              - Massive Project sebagai UI/UX Designer (Hipster)
            </p>
          </li>
        </ol>
      </section>

      {/* Skill */}
      <section
        id="skill"
        className="px-[30px] py-[20px] md:px-[100px] md:py-[70px] mt-10"
      >
        <h1 className="font-righteous text-primary text-xl md:text-2xl mb-2 text-center">
          Skill
        </h1>
        <div className="flex flex-col text-center mt-5 md:flex-row md:items-start md:text-start md:justify-between md:mt-10">
          <div className="md:w-[520px]">
            <h2 className="text-hitam font-righteous text-lg md:text-xl">
              Front End Web
            </h2>
            <p className="text-hitam font-robotomono text-[15px] md:text-base mt-2">
              Mampu mebuat website pada bagian front-end, saya biasa menggunakan
              HTML dan CSS, untuk JS, React JS, dan Tailwind saya bisa
              menggunakannya dan masih mempelajari lebih dalam.
            </p>
            <div className="flex justify-around items-center mt-4 md:justify-start md:gap-8">
              {/* html */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#E14E1D" rx="60" />
                    <path
                      fill="#fff"
                      d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38H48Z"
                    />
                    <path
                      fill="#EBEBEB"
                      d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128V38Zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014v-33.227Z"
                    />
                  </g>
                </svg>
              </div>
              {/* css */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#0277BD" rx="60" />
                    <path
                      fill="#EBEBEB"
                      d="m53.753 102.651l2.862 31.942h71.481v-31.942H53.753ZM128.095 38H48l2.904 31.942h77.191V38Zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164l.147-.041Z"
                    />
                    <path
                      fill="#fff"
                      d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942h39.333Z"
                    />
                  </g>
                </svg>
              </div>
              {/* JS */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#F0DB4F" rx="60" />
                    <path
                      fill="#323330"
                      d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"
                    />
                  </g>
                </svg>
              </div>
              {/* React */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#242938" rx="60" />
                    <path
                      fill="#00D8FF"
                      d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656c0-10.303-8.352-18.656-18.656-18.656c-10.303 0-18.656 8.353-18.656 18.656c0 10.303 8.353 18.656 18.656 18.656Z"
                    />
                    <path
                      stroke="#00D8FF"
                      strokeWidth="8.911"
                      d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812h.004Z"
                      clipRule="evenodd"
                    />
                    <path
                      stroke="#00D8FF"
                      strokeWidth="8.911"
                      d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723h.004Z"
                      clipRule="evenodd"
                    />
                    <path
                      stroke="#00D8FF"
                      strokeWidth="8.911"
                      d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
                      clipRule="evenodd"
                    />
                  </g>
                </svg>
              </div>
              {/* tailwind */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#242938" rx="60" />
                    <path
                      fill="url(#skillIconsTailwindcssDark0)"
                      fillRule="evenodd"
                      d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110Zm-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5Z"
                      clipRule="evenodd"
                    />
                    <defs>
                      <linearGradient
                        id="skillIconsTailwindcssDark0"
                        x1="86.5"
                        x2="163.5"
                        y1="74"
                        y2="185.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#32B1C1" />
                        <stop offset="1" stopColor="#14C6B7" />
                      </linearGradient>
                    </defs>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0 md:w-[520px]">
            <h2 className="text-hitam font-righteous text-lg md:text-xl">
              UI/UX Design
            </h2>
            <p className="text-hitam font-robotomono text-[15px] md:text-base mt-2">
              Mampu membuat sebuah UI/UX Design, dalam membuat sebuah UI/UX
              design saya biasa menggunakan aplikasi Figma.
            </p>
            <div className="flex justify-center mt-4 md:justify-start">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect width="256" height="256" fill="#242938" rx="60" />
                    <g clipPath="url(#skillIconsFigmaDark0)">
                      <path
                        fill="#0ACF83"
                        d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334c0 18.4 14.934 33.333 33.334 33.333Z"
                      />
                      <path
                        fill="#A259FF"
                        d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333Z"
                      />
                      <path
                        fill="#F24E1E"
                        d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334Z"
                      />
                      <path
                        fill="#FF7262"
                        d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68V28Z"
                      />
                      <path
                        fill="#1ABCFE"
                        d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333c-18.4 0-33.333-14.933-33.333-33.333s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="skillIconsFigmaDark0">
                        <path fill="#fff" d="M61 28h133.36v200H61z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project front end */}
      <section
        id="project"
        className="px-[30px] py-[20px] md:px-[100px] md:py-[60px]"
      >
        <h1 className="font-righteous text-primary text-xl md:text-2xl text-center md:text-start">
          Project <br className="md:hidden" /> Front-end
        </h1>
        <div className="flex flex-wrap gap-5 justify-center items-stretch mt-7 md:flex-row md:justify-start">
          {cardFe}
        </div>
      </section>
      {/* Project Design UI */}
      <section className="px-[30px] py-[20px] md:px-[100px] md:py-[60px]">
        <h1 className="font-righteous text-primary text-xl md:text-2xl text-center md:text-start">
          Project <br className="md:hidden" /> UI/UX
        </h1>
        <div className="flex flex-wrap gap-5 justify-center items-stretch mt-7 md:flex-row md:justify-start">
          {cardUI}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="kontak"
        className="px-[30px] py-[30px] md:px-[100px] md:py-[70px] mt-10 bg-gradient-to-b from-[#ECE9FF] to-[#F1FDFF]"
      >
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <a
            href="#"
            className="text-primary font-pacifico text-4xl md:text-5xl"
          >
            Farhan
          </a>
          <p className="font-robotomono text-[15px] md:text-xl text-center md:w-[400px] md:text-center">
            "Kegagalan adalah jalan memutar, bukan jalan buntu."
          </p>
          <div className="flex flex-wrap md:flex-row items-center gap-5 font-robotomono">
            {/* email */}

            <a
              href="mailto:farhanabdurrahmanzain@gmail.com"
              target="_blank"
              className="w-[40px] md:w-[50px] hover:scale-125 transition duration-150 ease-in-out"
            >
              <img src={Image.gmailLogo} alt="Gmail Logo" />
            </a>

            {/* linkedin */}

            <a
              href="https://linkedin.com/in/farhan-abdurrahman-zain"
              target="_blank"
              className="w-[40px] md:w-[50px] hover:scale-125 transition duration-150 ease-in-out"
            >
              <img src={Image.linkedinLogo} alt="Linkedin Logo" />
            </a>

            {/* github */}

            <a
              href="https://github.com/FarhanZain"
              target="_blank"
              className="w-[40px] md:w-[50px] hover:scale-125 transition duration-150 ease-in-out"
            >
              <img src={Image.githubLogo} alt="Github Logo" />
            </a>

            {/* ig */}

            <a
              href="https://www.instagram.com/farhanzainnn_/"
              target="_blank"
              className="w-[40px] md:w-[50px] hover:scale-125 transition duration-150 ease-in-out"
            >
              <img src={Image.igLogo} alt="Gmail Logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
