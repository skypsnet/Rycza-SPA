import { createRouter, createWebHistory } from "vue-router";
import { trackGTMPageView } from "@/utils/gtm";

import Landing from "@/Layouts/Landing.vue";
import StepperForm from "@/Layouts/StepperForm.vue";
// views for landingPage layout
import LandingPage from "@/views/LandingPage/LandingPage.vue";
import OurCLients from '@/views/OurClientsPage/OurClientsPage.vue';
import StepperFormPage from "@/views/StepperFormPage/StepperFormPage.vue";
import Error404 from "@/views/Errors/notFound.vue";

const routes = [
    {
        path: '/',
        component: Landing,
        meta: {
            title: 'Home Page ',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.',
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.',
                },
            ],
        },
        children: [
            {
                path: '/',
                name: 'LandingPage',
                component: LandingPage,
                meta: {
                    title: 'Rycza',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'Rycza home page.',
                        },
                        {
                            property: 'og:description',
                            content: 'Rycza home page!.',
                        },
                    ],
                },
            },
            {
                path: '/nuestros-clientes',
                name: 'OurCLients',
                component: OurCLients,
                meta: {
                    title: 'Nuestros Clientes',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'Rycza clients page.',
                        },
                        {
                            property: 'og:description',
                            content: 'Rycza clients page!.',
                        },
                    ],
                },
            },
        ],
    },
    {
        path: '/Contacto',
        component: StepperForm,
        meta: {
            title: 'Contacto',
            metaTags: [
                {
                    name: 'description',
                    content: 'Formulario de contacto.',
                },
                {
                    property: 'og:description',
                    content: 'Formulario de contacto.',
                },
            ],
        },
        children: [
            {
                path: '/Contacto',
                name: 'Contacto',
                component: StepperFormPage,
                meta: {
                    title: 'Contacto',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'Formulario de contacto.',
                        },
                        {
                            property: 'og:description',
                            content: 'Formulario de contacto.',
                        },
                    ],
                },
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: Landing,
        children: [
            {
                path: '',
                name: 'Error404',
                component: Error404,
                meta: {
                    title: '404',
                },
            },
        ],
    },
];
const setTitle = (newTitle) => {
    document.title = newTitle;
};
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: function (to, from, savedPosition) {/* 
        console.log(to); */
        if (to.hash) {
            return { el: to.hash, behavior: 'smooth' };
        } else {
            if (savedPosition) return savedPosition;
            return { top: 0, behavior: 'smooth' };
        }
    },
    routes,
});
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        setTitle(nearestWithTitle.meta.title);
    } else if (previousNearestWithMeta) {
        setTitle(previousNearestWithMeta.meta.title);
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
        (el) => el.parentNode.removeChild(el)
    );

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.

    nearestWithMeta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement("meta");

            Object.keys(tagDef).forEach((key) => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create so we don't interfere with other ones.
            tag.setAttribute("data-vue-router-controlled", "");

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach((tag) => document.head.appendChild(tag));

    next();
});

router.afterEach((to) => {
    trackGTMPageView(to.path, to.meta.title || document.title);
});

export default router;








