import React from "react";

export default function Popup(props) {
  return props.trigger ? (
    <div>
      <div
        id="info-popup"
        tabindex="-1"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
          <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
            <div class="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
              <h3 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                Event Details
              </h3>
              <p>
                The backup created with this export functionnality may contain
                some sensitive data. We suggest you to save this archive in a
                securised location.
              </p>
            </div>
            <div class="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
              <a
                href="#"
                class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Learn more about privacy
              </a>
              <div class="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                <button
                  id="close-modal"
                  type="button"
                  class="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
