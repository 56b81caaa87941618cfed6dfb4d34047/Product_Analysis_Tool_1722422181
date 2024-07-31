/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722422184", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl shadow-xl p-8">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Unlock Powerful Product Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-pink-100 md:text-lg">Gain a competitive edge with our cutting-edge product analysis app.</p>
                </div>
                
                <div id="cta-button-container" class="flex space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out">Analyze Your Products Now</a>
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out">Analyze Your Products Now</a>
                    <button class="flex-1 text-white bg-indigo-500 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out">Hello World</button>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
