import React, { useState } from 'react';

export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  return (
    <header>
      <div className="w-full h-full bg-gray-200">
        <nav className="hidden w-full px-4 bg-white shadow xl:block">
          <div className="container flex justify-between h-20 px-6 mx-auto ">
            <div className="flex items-center lg:w-80">
              <img
                className="w-20 h-12"
                src="https://s3-alpha-sig.figma.com/img/3891/434a/c3f1cf902c2abd7bbe39753abbe224bc?Expires=1616371200&Signature=bJlRBOWJiBxH8V4KjLLjcSKmSehyLR8a-LwFIlc521OHJUFd9dq7e4EmrRD3pYfK9RVRdteE86gVfkaWHgN~kgo3SNgmXREY3Y9avMIqpSeXprPVZHn57vbfttk8ljYYoyRBjTTTK3heG-otdBX7dI8PiOKTH2oPrZkqse6YFnv~7m6envJhxYkifXLakhMdRN6MlIijOQcmZEeEilpXXKBIMD4TkcYuaYVbwX3hXQzpirP6nYVWR3HWCumjnxMdddnbBZAcvp1PSSfkXFAQdEeoa1nIVbIHsoU25DH3oxS3Zs8JZAqFuyCQnVt3d6MXEOzM0EBm-yA9FREf227uow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              />
            </div>
            <div className="flex items-center pr-80">
              <ul className="flex items-center">
                <li className="w-full text-base tracking-normal text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent cursor-pointer hover:border-yellow-500">
                  Uno
                </li>
                <li className="w-full mx-10 text-base tracking-normal text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent cursor-pointer hover:border-yellow-500">
                  Duo
                </li>
                <li className="w-full mr-10 text-base tracking-normal text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent cursor-pointer hover:border-yellow-500">
                  Treo
                </li>
                <li className="w-full text-base font-medium tracking-normal text-gray-700 transition duration-150 ease-in-out border-b-2 border-transparent cursor-pointer hover:border-yellow-500">
                  Deliverables
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <button
                className="px-10 py-2 text-base font-medium leading-normal text-center text-gray-700 bg-yellow-500 border-2 border-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600"
                onClick={handler}
                type="button"
              >
                Call to acton
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex text-left">
                <span className="flex-grow font-semibold"> Ukranian </span>
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
