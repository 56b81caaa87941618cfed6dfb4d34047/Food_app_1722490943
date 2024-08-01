/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722492348", {
    template: `
    <section id="cta-component" style="min-height: 430px" class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-12 mx-auto lg:py-20 lg:px-10 backdrop-blur-lg bg-white bg-opacity-10 rounded-2xl shadow-xl">
            <div id="cta-content" class="max-w-screen-md mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-black leading-tight tracking-wide text-white text-shadow-lg">Discover Delicious Flavors12</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-white text-opacity-90 md:text-xl">Explore our collection of mouthwatering recipes and find your next culinary adventure.</p>
                </div>
                
                <div id="cta-button-container" class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-30 hover:bg-opacity-50 focus:ring-4 focus:ring-purple-300 font-semibold rounded-xl text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Browse Recipes</a>
                    <a href="#" class="flex-1 text-white bg-blue-600 bg-opacity-30 hover:bg-opacity-50 focus:ring-4 focus:ring-blue-300 font-semibold rounded-xl text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Nine</a>
                    <a href="#" class="flex-1 text-white bg-pink-600 bg-opacity-30 hover:bg-opacity-50 focus:ring-4 focus:ring-pink-300 font-semibold rounded-xl text-lg px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 backdrop-filter backdrop-blur-sm">Zero</a>
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
