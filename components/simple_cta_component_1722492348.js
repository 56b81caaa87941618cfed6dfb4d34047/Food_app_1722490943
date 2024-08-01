/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722492348", {
    template: `
    <section id="cta-component" style="min-height: 550px"   class="flex-1 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white text-shadow">Discover Delicious Flavors12</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-white text-opacity-90 md:text-lg">Explore our collection of mouthwatering recipes and find your next culinary adventure.</p>
                </div>
                
                <div id="cta-button-container" class="flex space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Browse Recipes</a>
                    <a href="#" class="flex-1 text-white bg-blue-600 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Nine</a>
                    <a href="#" class="flex-1 text-white bg-pink-600 bg-opacity-50 hover:bg-opacity-70 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Zero</a>
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
