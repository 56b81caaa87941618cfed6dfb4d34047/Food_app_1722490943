/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722496279", {
    template: `
    <section id="cta-component" style="min-height: 310px" class="bg-gradient-to-br from-pink-300 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white text-shadow">Discover Celestial Flavors</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-pink-100 md:text-lg">Embark on a cosmic culinary journey through our collection of otherworldly recipes.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:ring-pink-300 font-medium rounded-full text-sm px-6 py-3 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Explore Cosmic Cuisine</a>
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
