/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722490944", {
    template: `
    <section id="cta-component" style="min-height: 630px"   class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto backdrop-blur-md bg-white/30 rounded-3xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-wide text-white">Discover Delicious Flavors3</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-lg text-pink-100 md:text-xl">Explore our collection of mouthwatering recipes and find your next culinary adventure.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-700 bg-white/80 hover:bg-white focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-lg px-8 py-3 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Browse Recipes</a>
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
