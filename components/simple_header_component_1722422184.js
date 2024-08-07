/* Summary: The header component is a nav bar on top of the page -- it contains the app's logo and name in a big, bold font, to the left. In the middle there are 4 text items each hyperlinked.
*/

Vue.component("simple_header_component_1722422184", {
    template: `
    <header id="header-section" class="w-full">
        <nav id="nav-bar" class="bg-opacity-30 backdrop-blur-xl bg-gradient-to-r from-pink-300 to-purple-400 border-b border-pink-200 py-6 dark:bg-opacity-20 dark:backdrop-blur-xl dark:from-pink-500 dark:to-purple-600 dark:border-purple-300">
            <div id="nav-container" class="flex flex-wrap items-center justify-between max-w-screen-xl px-8 mx-auto">
                <a id="logo-link" href="#" class="flex items-center">
                    <img id="logo-image" src="./images/logo.svg" class="h-10 mr-4 sm:h-12 filter drop-shadow-lg" alt="Landwind Logo" />
                    <span id="app-name" class="self-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 dark:from-pink-300 dark:to-purple-500 drop-shadow-md">ProductScope - New Product Analysis</span>
                </a>
                <div id="menu-toggle-button" class="flex items-center lg:order-2">
                    <button id="collapse-button" data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-purple-600 rounded-lg lg:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:text-purple-300 dark:hover:bg-purple-800 dark:focus:ring-pink-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg id="menu-open-icon" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                        <svg id="menu-close-icon" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div id="mobile-menu-2" class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                    <ul id="nav-list" class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li id="nav-item-home"><a href="#" class="block py-2 pl-3 pr-4 text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg lg:bg-transparent lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-pink-400 lg:to-purple-600 lg:p-0 dark:text-white transition duration-300 ease-in-out transform hover:scale-105" aria-current="page">Comprehensive Data Aggregation</a></li>
                        <li id="nav-item-1"><a href="#" class="block py-2 pl-3 pr-4 text-purple-700 rounded-lg hover:bg-pink-100 lg:hover:bg-transparent lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-pink-400 lg:hover:to-purple-600 lg:p-0 dark:text-purple-300 lg:dark:hover:text-white dark:hover:bg-purple-800 lg:dark:hover:bg-transparent transition duration-300 ease-in-out transform hover:scale-105">AI-Powered Product Insights</a></li>
                        <li id="nav-item-2"><a href="#" class="block py-2 pl-3 pr-4 text-purple-700 rounded-lg hover:bg-pink-100 lg:hover:bg-transparent lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-pink-400 lg:hover:to-purple-600 lg:p-0 dark:text-purple-300 lg:dark:hover:text-white dark:hover:bg-purple-800 lg:dark:hover:bg-transparent transition duration-300 ease-in-out transform hover:scale-105">User Feedback Integration</a></li>
                        <li id="nav-item-3"><a href="#" class="block py-2 pl-3 pr-4 text-purple-700 rounded-lg hover:bg-pink-100 lg:hover:bg-transparent lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-r lg:hover:from-pink-400 lg:hover:to-purple-600 lg:p-0 dark:text-purple-300 lg:dark:hover:text-white dark:hover:bg-purple-800 lg:dark:hover:bg-transparent transition duration-300 ease-in-out transform hover:scale-105">Intuitive Data Visualization</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
