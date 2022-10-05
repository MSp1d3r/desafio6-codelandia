/* eslint-disable max-len */
import React from 'react';

export default function HomePage() {
  return (
    <>
      <div className="flex w-screen h-full justify-center items-center abolute overflow-hidden ">
        <div className="flex flex-col flex-wrap items-center">
          <span id="titulos" className="flex flex-col absolute  text-white mt-20 text-[20px] font1">ESTÁ DISPONÍVEL AGORA!</span>
          <img src="./src/assets/LOKI.png" width="222" height="127" alt="" className="flex mt-[200px] absolute animate-pulse" />
        </div>
      </div>
      <div className="flex flex-row w-full h-full absolute justify-center items-center mt-20 center">
        <div id="encarte">
          <img src="./src/assets/capa.png" alt="" className="flex" />
        </div>
        <div id="h2" className="flex w-[850px] justify-center items-center text-white">
          <h2>Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”. </h2>
        </div>
        <div className="flex flex-wrap w-[750px] absolute justify-center items-center">
          <div className="flex mt-[300px] ml-[450px]">
            <div id="details">
              <h4 id="h4">
                <svg id="svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15 7.5V15L20 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                51min
              </h4>
              <h5 id="h5">
                <svg id="svg" width="236" height="40" viewBox="0 0 236 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 3.33334L25.15 13.7667L36.6667 15.45L28.3333 23.5667L30.3 35.0333L20 29.6167L9.7 35.0333L11.6667 23.5667L3.33333 15.45L14.85 13.7667L20 3.33334Z"
                    fill="#FFA800"
                    stroke="#FFA800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M69 3.33334L74.15 13.7667L85.6667 15.45L77.3333 23.5667L79.3 35.0333L69 29.6167L58.7 35.0333L60.6667 23.5667L52.3333 15.45L63.85 13.7667L69 3.33334Z"
                    fill="#FFA800"
                    stroke="#FFA800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M118 3.33334L123.15 13.7667L134.667 15.45L126.333 23.5667L128.3 35.0333L118 29.6167L107.7 35.0333L109.667 23.5667L101.333 15.45L112.85 13.7667L118 3.33334Z"
                    fill="#FFA800"
                    stroke="#FFA800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M167 3.33334L172.15 13.7667L183.667 15.45L175.333 23.5667L177.3 35.0333L167 29.6167L156.7 35.0333L158.667 23.5667L150.333 15.45L161.85 13.7667L167 3.33334Z"
                    fill="#FFA800"
                    stroke="#FFA800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M216 3.33334L221.15 13.7667L232.667 15.45L224.333 23.5667L226.3 35.0333L216 29.6167L205.7 35.0333L207.667 23.5667L199.333 15.45L210.85 13.7667L216 3.33334Z"
                    fill="white"
                    fillOpacity="0.5"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h5>

              <h6 id="h6">2021</h6>

            </div>

          </div>
          <div className="flex flex-row gap-8 mt-10 ml-10">
            <button type="submit" className="flex text-white font2 text-[16px] bg-[#0072D2] px-8 py-4 bg-no-repet bg-cover hover:bg-blue-800 rounded-lg ">ASSITIR AGORA</button>
            <button type="submit" className="flex text-white font2 text-[16px] bg-[#0072D2] px-8 py-4 bg-no-repet bg-cover hover:bg-blue-800 rounded-lg ">TRAILER</button>
          </div>
        </div>
      </div>
    </>
  );
}
