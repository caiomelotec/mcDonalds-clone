import React, { useState } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export const Modal = () => {
  const [modal, setModal] = useState(true);

  const handleModal = () => {
    setModal(false);
  };

  return modal ? (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow text-black border-gray-600 border-2">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold dark:text:black">
                Welcome to My McDonald's Clone.
              </h3>
              <button
                onClick={handleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed dark:text-gray-700">
                Welcome to My McDonald's Clone, a project developed by me, Caio
                Melo. This website was created using React for the frontend,
                along with HTML and CSS. It's designed to be fully responsive,
                adapting seamlessly to various screen sizes. The site serves as
                a clone of the German McDonald's website, and it's important to
                note that I undertook this project solely for learning purposes.
                Feel free to explore and interact with the different elements as
                you navigate through the site
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <a
                data-modal-hide="staticModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                href="https://github.com/caiomelotec?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <AiOutlineGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/caio-melo-335b71190/"
                rel="noopener noreferrer"
                target="_blank"
                data-modal-hide="staticModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Linkedin
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
