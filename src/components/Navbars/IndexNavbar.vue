<template>
    <header class=" w-full  z-50 " :class="headerClasses">
        <nav class="navbar px-5 lg:px-0  navbar-expand-lg py-2 flex lg:items-center w-full justify-between"
            :class="navClasses">
            <div class=" w-full flex flex-col lg:flex-row flex-wrap items-center justify-between"
                :class="{ 'h-full': collapsedMenu }">
                <div class="flex w-full items-center justify-between container ">
                    <a href="/">
                        <img v-show="blackLogo" src="@/assets/svg/LOGO_RYCZA.svg" width="50" height="50"
                            class="d-inline-block align-top lg:hidden h-[2.94rem] w-[8.29rem]" alt="" />
                        <img v-show="!blackLogo" src="@/assets/svg/LOGO_RYCZA_BLANCO.svg" width="50" height="50"
                            class="d-inline-block align-top lg:hidden h-[2.94rem] w-[8.29rem]" alt="" />
                    </a>

                    <button
                        class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent  transition-shadow duration-150 ease-in-out mr-2"
                        type="button" @click="toggleMenu" :class="black ? 'text-black' : ' text-white'">
                        <svg v-if="!blackLogo" aria-hidden="true" focusable="false" data-prefix="fas"
                            class="h-[1.54rem]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                        <svg v-if="blackLogo" aria-hidden="true" focusable="false" data-prefix="fas" class="h-[1.54rem]"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#0B0B0B"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div class="w-full grow items-center">
                    <div class="  justify-between items-center grow hidden lg:flex">
                        <div class="container w-[50%] ">
                            <div class="hidden md:flex max-w-[90%] ml-auto ">
                                <router-link :to="{ name: 'LandingPage' }">
                                    <img v-show="blackLogo" src="@/assets/svg/LOGO_RYCZA.svg" width="50" height="50"
                                        class="d-inline-block align-top w-48 " alt="" />
                                    <img v-show="!blackLogo" src="@/assets/svg/LOGO_RYCZA_BLANCO.svg" width="50"
                                        height="50" class="d-inline-block align-top w-48" alt="" />
                                </router-link>
                            </div>
                        </div>
                        <div class="h5  w-[50%] font-weight-normal text-muted px-5  items-center">
                            <div class="m-auto xl:mr-5 xl:ml-2 flex justify-center xl:justify-evenly xl:gap-7 ">
                                <router-link :to="{ name: 'LandingPage' }"
                                    class="p-2  font-medium uppercase   text-twenty" :class="textWhite">
                                    Inicio
                                </router-link>
                                <router-link :to="{ name: 'OurCLients' }"
                                    class="p-2  font-medium uppercase  text-twenty  " :class="textWhite">
                                    NUESTROS CLIENTES
                                </router-link>
                                <router-link :to="{ name: 'Contacto' }" class="p-1 rounded-[12px] py-2 xl:px-6 font-medium	   text-twenty text-center"
                                    :class="blackLogo ? 'text-blue border border-blue' : 'bg-blue text-white'">
                                    CONTÁCTANOS
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-start pt-10 lg:hidden min-h-[500px]" v-show="collapsedMenu">
                        <div class="my-auto">
                            <div class="mb-5">
                                <router-link :to="{ name: 'LandingPage' }" @click="toggleMenu"
                                    class="p-2 text-black uppercase font-medium text-twenty">
                                    Inicio
                                </router-link>
                            </div>
                            <div class="mb-5">
                                <router-link :to="{ name: 'OurCLients' }" @click="toggleMenu"
                                    class="p-2 text-black font-medium uppercase  text-twenty ">
                                    NUESTROS CLIENTES
                                </router-link>
                            </div>
                            <div class="mb-5 max-w-[70%]">
                                <router-link :to="{ name: 'Contacto' }" @click="toggleMenu"
                                    class="p-1 rounded-[12px] py-2 block md:px-6 font-medium text-center text-white bg-blue text-twenty">
                                    CONTÁCTANOS
                                </router-link>
                            </div>
                        </div>

                        <div class="text-start text-blue text-xl font-medium mt-auto">
                            <p class="italic">Espacios libre de goteras</p>
                            <a href="mailto:rycza@gmail.com"> Contacto: rycza@gmail.com </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navbarOpen: false,
            toggle: false,
            window: {
                width: 0,
                height: 0,
            },
            scrolled: false,
        };

    },
    props: {
        black: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
            const body = document.querySelector("body");
            if (this.toggle) {
                body.classList.add("overflow-hidden");
            } else {
                body.classList.remove("overflow-hidden");
            }
        },
        toggleMenu() {
            const body = document.querySelector("body");
            this.toggle = !this.toggle;
            if (this.toggle) {
                body.classList.add("overflow-hidden");
            } else {
                body.classList.remove("overflow-hidden");
            }
        },
        handleScroll() {
            this.scrolled = window.scrollY > 550;

        }
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);

        this.handleResize();
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("scroll", this.handleScroll);
    },
    computed: {
        collapsedMenu: function () {
            const body = document.querySelector("body");
            if (this.window.width < 1024)
                return this.toggle;
            body.classList.remove("overflow-hidden");

            this.toggle = false;
            return false;
        },
        headerClasses: {
            get() {
                return {
                    "bg-white": this.black,
                    "absolute bg-transparent": !this.black,
                    "sticky min-h-screen !fixed": this.collapsedMenu,
                    "headroom !fixed header  !bg-white drop-shadow-2xl": this.scrolled,
                };
            },
        },
        navClasses: {
            get() {
                return {
                    "bg-white  lg:bg-transparent h-full min-h-screen ": this.collapsedMenu,
                };
            }
        },
        blackLogo() {
            return this.black || this.collapsedMenu || this.scrolled;

        },
        textWhite: {
            get() {
                return {
                    '!text-black': this.scrolled || this.$route.name !== 'OurCLients',
                    'text-white': !this.scrolled
                };
            }
        },
    },
};
</script>
<style>
.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}
</style>
