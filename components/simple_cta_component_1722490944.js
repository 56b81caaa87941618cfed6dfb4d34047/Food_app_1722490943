/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722490944", {
    template: `
    <section id="cta-component" class="min-h-screen bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center p-8">
        <div id="cta-inner-container" class="max-w-screen-xl w-full px-8 py-16 mx-auto backdrop-blur-lg bg-white/20 rounded-3xl shadow-2xl border border-white/30">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-5xl font-extrabold leading-tight tracking-wide text-white text-shadow-lg">Discover Celestial Flavors</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-xl text-pink-100 md:text-2xl">Explore our collection of otherworldly recipes and embark on a culinary journey through the cosmos.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white/80 hover:bg-white/90 focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-xl px-10 py-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Discover Cosmic Cuisine</a>
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
