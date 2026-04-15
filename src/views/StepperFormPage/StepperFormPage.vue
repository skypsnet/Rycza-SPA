<template>
    <div class="min-h-[63vh] grow flex flex-col relative " :class="stepperCointainerClasses">
        <loading v-model:active="isLoading"  :is-full-page="fullPage" />
        <div class="w-[90%] mx-auto px-8 mt-5 relative flex justify-start" v-if="identifier != 1">
            <button v-if="identifier != 9"
                class="flex mx-2 text-twenty-five text-blue lg:text-black md:text-twenty-five-md" @click="prevStep">
                <span class="material-symbols-sharp !text-blue">
                    arrow_back_ios
                </span>
                <span class="hidden lg:flow-root font-medium">Regresar</span> </button>
            <p class="hidden lg:flex text-black mx-4 text-twenty-five md:text-twenty-five-md  items-center" v-else>
                ENVIADO <img src="@/assets/img/Contact/estrellaForm.svg" class="ml-1" alt="starsIcon" title="Enviado" />
            </p>
            <div class="grow border h-4 mx-2 my-auto  border-blue  rounded-md">
                <div class="bg-blue h-full   rounded-md" :style="progressBarStyle">
                </div>
            </div>
        </div>
        <div class="grow min-h-inerhit  w-full relative flex  justify-center justify-self-center mx-auto items-center min-h-full "
            :class="identifierContainerClasses">
            <FirstStep v-show="identifier === 1" @nextStep="nextStep" />
            <div v-show="identifier === 2" class="identifier-container container flex flex-col justify-around">
                <p class="pp-mori text-thirty mx-auto text-center lg:text-thirty-md font-semibold  my-4 ">
                    ¿Tienes problemas de goteras <br class="hidden lg:flow-root"> o humedad en tu domicilio?
                </p>
                <div class="radio-toolbar flex flex-col lg:flex-row justify-around ">
                    <input id="goterasHumedadEnDomicilio1" type="radio" name="goteras" value="Si"
                        v-model="goterasHumedadEnDomicilio" />
                    <label class="text-fifteen" for="goterasHumedadEnDomicilio1">Si</label>
                    <input id="goterasHumedadEnDomicilio2" type="radio" name="goteras" value="No"
                        v-model="goterasHumedadEnDomicilio" />
                    <label class="text-fifteen" for="goterasHumedadEnDomicilio2">No</label>
                </div>
                <button @click="nextStep" class="button-form-question  "
                    :class="goterasHumedadEnDomicilio ? 'button--orange' : 'button--orange-disabled'"
                    :disabled="!goterasHumedadEnDomicilio">Siguiente<span class="material-symbols-sharp">
                        arrow_forward_ios
                    </span> </button>
            </div>
            <div v-show="identifier === 3" class="identifier-container container flex flex-col justify-around">
                <p class="title-form-question">
                    Selecciona el tipo de construcción donde tienes este inconveniente
                </p>
                <div v-show="tipoDeConstruccion != 'Otro'"
                    class="radio-toolbar flex flex-col lg:flex-row justify-around flex-wrap ">
                    <input type="radio" id="tipoDeConstruccion1" name="tipoDeConstruccion" value="Casa de 1 nivel"
                        v-model="tipoDeConstruccion" />
                    <label class="text-fifteen" for="tipoDeConstruccion1">Casa de 1 nivel</label>
                    <input type="radio" id="tipoDeConstruccion2" name="tipoDeConstruccion" value="Casa de 2 niveles"
                        v-model="tipoDeConstruccion" />
                    <label class="text-fifteen" for="tipoDeConstruccion2">Casa de 2 niveles</label>
                    <input type="radio" id="tipoDeConstruccion3" name="tipoDeConstruccion" value="Departamento"
                        v-model="tipoDeConstruccion" />
                    <label class="text-fifteen" for="tipoDeConstruccion3">Departamento</label>
                    <input type="radio" id="tipoDeConstruccion4" name="tipoDeConstruccion" value="Edificio"
                        v-model="tipoDeConstruccion" />
                    <label class="text-fifteen" for="tipoDeConstruccion4">Edificio</label>
                    <input type="radio" id="tipoDeConstruccion5" name="tipoDeConstruccion" value="Otro"
                        v-model="tipoDeConstruccion" />
                    <label class="text-fifteen" for="tipoDeConstruccion5">Otro</label>
                </div>
                <div v-if="tipoDeConstruccion == 'Otro'">
                    <div class="relative">
                        <input id="otroTipoDeConstruccion" v-model="otroTipoDeConstruccion"
                            class="border-1 !border-t-0 !border-x-0 peer rycza-input font-normal leading-5 w-full text-fifteen border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="otroTipoDeConstruccion"
                            class="pe-input--label uppercase bg-transparent absolute duration-300 text-fifteen transform -translate-y-2 z-10 origin-[0] top-2 scale-75 autofill:off peer-focus:px-0  peer-focus:scale-75 peer-focus:top-3  peer-focus:-translate-y-3 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            ¿QUÉ TIPO DE CONSTRUCCIÓN ES?
                        </label>
                    </div>
                </div>
                <button @click="nextStep" class="button-form-question "
                    :class="tipoDeConstruccionChecked ? 'button--orange' : 'button--orange-disabled'"
                    :disabled="!tipoDeConstruccionChecked">Siguiente<span class="material-symbols-sharp">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
            <div v-show="identifier === 4" class="identifier-container container flex flex-col justify-around">
                <p class="title-form-question">
                    Te identificas como:
                </p>
                <div class="radio-toolbar flex flex-col lg:flex-row justify-around flex-wrap ">
                    <input type="radio" id="identificacion1" name="identificacion" value="Particular"
                        v-model="identificacion" />
                    <label class="text-fifteen" for="identificacion1">Particular</label>
                    <input type="radio" id="identificacion2" name="identificacion"
                        value="Constructor o encargado de mantenimiento" v-model="identificacion" />
                    <label class="text-fifteen" for="identificacion2">Constructor o <br /> encargado de
                        mantenimiento</label>
                </div>
                <button @click="nextStep" class="button-form-question "
                    :class="identificacion ? 'button--orange' : 'button--orange-disabled'"
                    :disabled="!identificacion">Siguiente<span class="material-symbols-sharp">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
            <div v-show="identifier === 5" class="identifier-container   flex flex-col w-full   justify-around">
                <p class="title-form-question !mb-0">
                    Productos que podrían interesarte
                </p>
                <p class="uppercase text-base text-center my-3 text-blue ">
                    seleciona una opción
                </p>
                <div class=" lg:flex">
                    <input type="checkbox" id="productoInteresado" name="productoInteresado" value="acrilicos"
                        v-model="productoInteresado" class="hidden" />

                    <label class="lg:px-1  " for="productoInteresado">
                        <div class="interested-card"
                            :class="checkproductoInteresado('acrilicos') ? 'text-blue-light blue-box-shadow' : 'default-box-shadow text-black'">
                            <p class="uppercase text-fifteen ">ACRÍLICOS</p>
                            <Splide :options="splideOptions" class="!py-0 !px-6   w-full my-[1rem]  mx-auto">
                                <SplideSlide class="text-center p-1 rounded">
                                    <div>
                                        <img src="@/assets/img/contact/ACRILICOS/Acrilico_rycza.webp"
                                            alt="Acrilico_rycza" class="aspect-square rounded-md" />
                                    </div>

                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/ACRILICOS/Acrilico2_rycza.webp"
                                                alt="Acrilico_rycza2" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1  rounded">
                                        <div>
                                            <img src="@/assets/img/contact/ACRILICOS/Acrilico3_rycza.webp"
                                                alt="Acrilico_rycza3" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                            <p class="text-twenty lg:text-twenty-md px-6 text-justify  m-auto mt-0">
                                Proporciona una capa impermeable sin juntas, se recomienda su uso en zonas sin
                                encharcamiento.
                            </p>
                        </div>
                    </label>
                    <input type="checkbox" id="productoInteresado2" name="productoInteresado" value="prefabricados"
                        v-model="productoInteresado" class="hidden" />
                    <label class="lg:px-1 " for="productoInteresado2">
                        <div class="interested-card"
                            :class="checkproductoInteresado('prefabricados') ? 'text-blue-light blue-box-shadow' : 'default-box-shadow text-black'">
                            <p class="uppercase text-fifteen">prefabricados</p>
                            <Splide :options="splideOptions" class="!py-0 !px-6  w-full my-[1rem] mx-auto">
                                <SplideSlide class="text-center p-1 rounded">
                                    <div>
                                        <img src="@/assets/img/contact/PREFABRICADOS/Prefabricado1_rycza.webp"
                                            alt="Acrilico_rycza" class="aspect-square rounded-md" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/PREFABRICADOS/Prefabricado2_rycza.webp"
                                                alt="Acrilico_rycza2" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/PREFABRICADOS/Prefabricado3_rycza.webp"
                                                alt="Acrilico_rycza3" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                            <p class="text-twenty lg:text-twenty-md px-6 text-justify  m-auto mt-0">Capas de asfalto
                                modificado,
                                aplicación con soplete, acabado granular, esmaltado a fuego, colores: gris/ blanco,
                                verde o terracota.
                            </p>
                        </div>
                    </label>
                    <input type="checkbox" id="productoInteresado3" name="productoInteresado" value="cementicios"
                        v-model="productoInteresado" class="hidden" />
                    <label class="lg:px-1 default-box-shadow" for="productoInteresado3">
                        <div class="interested-card"
                            :class="checkproductoInteresado('cementicios') ? 'text-blue-light blue-box-shadow' : 'default-box-shadow text-black'">
                            <p class="uppercase text-fifteen">cementicios</p>
                            <Splide :options="splideOptions" class="!py-0 !px-6  w-full my-[1rem]  mx-auto">
                                <SplideSlide class="text-center p-1 rounded">
                                    <div>
                                        <img src="@/assets/img/contact/CEMENTICIOS/Cementicio1_rycza.webp"
                                            alt="Acrilico_rycza" class="aspect-square rounded-md" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/CEMENTICIOS/Cementicio2_rycza.webp"
                                                alt="Acrilico_rycza" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/CEMENTICIOS/Cementicio3_rycza.webp"
                                                alt="Acrilico_rycza" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                            <p class="text-twenty lg:text-twenty-md px-6 text-justify m-auto mt-0">
                                Su uso en general para contacto directo con el agua.
                                Se recomienda para cisternas, terrazas, cimentación azoteas.
                            </p>
                        </div>
                    </label>
                    <input type="checkbox" id="productoInteresado4" name="productoInteresado" value="Termo reductores"
                        v-model="productoInteresado" class="hidden" />
                    <label class="lg:px-1 default-box-shadow" for="productoInteresado4">
                        <div class="interested-card"
                            :class="checkproductoInteresado('Termo reductores') ? 'text-blue-light blue-box-shadow' : 'default-box-shadow text-black'">
                            <p class="uppercase text-fifteen">TERMO REDUCTORES</p>
                            <Splide :options="splideOptions" class="!py-0 !px-6  w-full my-[1rem]  mx-auto">
                                <SplideSlide class="text-center p-1 rounded">
                                    <div>
                                        <img src="@/assets/img/contact/TERMOREDUCTORES/Termoreductor1_rycza.webp"
                                            alt="Termoreductor1_rycza" class="aspect-square rounded-md" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/TERMOREDUCTORES/Termoreductor2_rycza.webp"
                                                alt="Termoreductor2_rycza" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div class="text-center p-1 rounded">
                                        <div>
                                            <img src="@/assets/img/contact/TERMOREDUCTORES/Termoreductor3_rycza.webp"
                                                alt="Termoreductor3_rycza" class="aspect-square rounded-md" />
                                        </div>
                                    </div>
                                </SplideSlide>
                            </Splide>
                            <p class="text-twenty lg:text-twenty-md px-6 text-justify  m-auto mt-0">Aumenta la
                                reflectancia
                                solar
                                disminuyendo la temperatura de la losa así como una capa impermeable sin juntas.
                            </p>
                        </div>
                    </label>
                </div>
                <div class="flex flex-wrap items-end my-10">
                    <p class="title-form-question mb-2 lg:!mx-0 lg:!mb-0  ">
                        Busco otro producto:
                    </p>
                    <div class="relative min-w-full lg:min-w-[40%]">
                        <input id="otroTipodeProductoInteresado" v-model="otroTipodeProductoInteresado"
                            class=" border-1 !border-t-0 !border-x-0    peer rycza-input font-normal leading-5    w-full text-fifteen border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="otroTipodeProductoInteresado"
                            class="pe-input--label uppercase bg-transparent absolute duration-300 text-fifteen transform 
                            -translate-y-2 z-10 origin-[0] -top-[-1.5rem] sm:top-2 scale-75 
                            autofill:off peer-focus:px-0  peer-focus:scale-75 peer-focus:top-3  
                            peer-focus:-translate-y-3 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            Escribe qué producto buscas
                        </label>
                    </div>
                </div>
                <button @click="nextStep" class="button-form-question block"
                    :class="otroTipodeProductoInteresadoChecked ? 'button--orange' : 'button--orange-disabled'"
                    :disabled="!otroTipodeProductoInteresadoChecked">Siguiente <span class="material-symbols-sharp">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
            <div v-show="identifier === 6" class="identifier-container container flex flex-col justify-around">
                <p class="title-form-question">
                    ¿Requieres mantenimiento?
                </p>
                <div class="radio-toolbar flex flex-col lg:flex-row justify-around flex-wrap ">
                    <input type="radio" id="mantenimientoPreventivo" name="mantenimientoPreventivo" value="Si"
                        v-model="mantenimientoPreventivo" />
                    <Label class="text-fifteen" for="mantenimientoPreventivo">Si</Label>
                    <input type="radio" id="mantenimientoPreventivo2" name="mantenimientoPreventivo" value="No"
                        v-model="mantenimientoPreventivo" />
                    <Label class="text-fifteen" for="mantenimientoPreventivo2">No</Label>

                </div>
                <button @click="nextStep" class="button-form-question "
                    :class="mantenimientoPreventivo ? 'button--orange' : 'button--orange-disabled'"
                    :disabled="!mantenimientoPreventivo">Siguiente<span class="material-symbols-sharp">
                        arrow_forward_ios
                    </span></button>
            </div>
            <div v-show="identifier === 7" class="identifier-container container flex flex-col justify-around ">
                <p class="title-form-question">
                    ¿En dónde requieres el servicio?
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 container s">
                    <div class="relative col-span-2  lg:col-span-auto">
                        <select id="dondeRequieresElServicioubicacion" v-model="dondeRequieresElServicio.ubicacion"
                            class="col-span-full border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" ">
                            <option value="">Seleccione una opción</option>
                            <option v-for="(option, index) in placeOptions" :key="index" :value="option">
                                {{ option }}
                            </option>
                        </select>
                        <label for="dondeRequieresElServicioubicacion"
                            class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            SELECCIONA TU UBICACIÓN
                        </label>
                    </div>
                    <div class="relative col-span-2 lg:col-span-auto">
                        <input id="dondeRequieresElServiciocolonia" v-model="dondeRequieresElServicio.colonia"
                            class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="dondeRequieresElServiciocolonia"
                            class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            colonia
                        </label>
                    </div>
                    <div class="relative col-span-2 lg:col-span-auto">
                        <input id="dondeRequieresElServiciocalle" v-model="dondeRequieresElServicio.calle"
                            class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="dondeRequieresElServiciocalle"
                            class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            calle
                        </label>
                    </div>
                    <div class="relative col-span-2 lg:col-span-auto">
                        <input id="dondeRequieresElServicionoExterior" v-model="dondeRequieresElServicio.noExterior"
                            class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="dondeRequieresElServicionoExterior"
                            class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            no.Exterior
                        </label>
                    </div>
                    <div class="relative col-span-2 lg:col-span-auto ">
                        <input id="dondeRequieresElServicionoInterior" v-model="dondeRequieresElServicio.noInterior"
                            class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="dondeRequieresElServicionoInterior"
                            class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            no.Interior
                        </label>
                    </div>
                    <div class="relative  col-span-2 lg:col-span-auto">
                        <input id="dondeRequieresElServicioreferencias" v-model="dondeRequieresElServicio.referencias"
                            class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            type="text" placeholder=" " />
                        <label for="dondeRequieresElServicioreferencias"
                            class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                            referencias
                        </label>
                    </div>
                </div>
                <button @click="nextStep" class="button-form-question "
                    :class="dondeRequieresElServicio.fullfilled ? 'button--orange' : 'button--orange-disabled'"
                    :disabled="!dondeRequieresElServicio.fullfilled">Siguiente<span class="material-symbols-sharp">
                        arrow_forward_ios
                    </span></button>
            </div>
            <div v-show="identifier === 8" class="identifier-container container flex flex-col justify-around ">
                <p class="title-form-question " v-if="actualPathIndex != 0 && actualPathIndex != 2">
                    Servicios especializados RYCZA</p>
                <p class="title-form-question " v-if="actualPathIndex != 3 && actualPathIndex != 1">
                    Proporcionanos tus datos </p>

                <p class="uppercase text-base text-center my-3 text-blue "
                    v-if="actualPathIndex == 3 || actualPathIndex == 1">
                    Proporcionanos tus datos
                </p>
                <br /><br />
                <div class="container lg:w-1/2 ">
                    <div class="flex">
                        <label for="datosDelClientenombre" class="m-auto">
                            <img src="@/assets/svg/contact/user.svg" alt="name"
                                class="w-full max-w-[30px] lg:max-w-[40px]" />
                        </label>
                        <div class="w-full relative ">
                            <input id="datosDelClientenombre" v-model="datosDelCliente.nombre"
                                class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                                type="text" placeholder=" " />
                            <label for="datosDelClientenombre"
                                class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                                nombre completo
                            </label>
                        </div>
                    </div>

                    <div class="flex py-5">
                        <label for="datosDelClientetelefono" class="m-auto">
                            <img src="@/assets/svg/contact/telephone.svg" alt="telephone"
                                class="w-full max-w-[30px] lg:max-w-[40px]" />
                        </label>
                        <div class="relative w-full ">
                            <input id="datosDelClientetelefono" v-model="datosDelCliente.telefono"
                                class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                                type="text" placeholder=" " />
                            <label for="datosDelClientetelefono"
                                class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                                telefono
                            </label>
                        </div>
                    </div>
                    <div class="flex pb-5">
                        <label for="datosDelClientecorreo" class="m-auto">
                            <img src="@/assets/svg/contact/mail.svg" alt="mail"
                                class="w-full max-w-[30px] lg:max-w-[40px]" />
                        </label>
                        <div class="relative  w-full">
                            <input id="datosDelClientecorreo" v-model="datosDelCliente.correo"
                                class=" border-1 peer rycza-input font-normal leading-5 rounded block  w-full text-sm border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                                type="text" placeholder=" " />
                            <label for="datosDelClientecorreo"
                                class="pe-input--label uppercase bg-transparent absolute text-sm duration-300 transform -translate-y-2 z-10 origin-[0] px-2 top-3 scale-75 autofill:off peer-focus:px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-2 left-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2">
                                correo
                            </label>
                        </div>
                    </div><br />
                    <p class="text-center col-span-full pp-mori text-thirty mx-auto md:text-thirty-md font-semibold ">
                        Proporcionanos tus datos
                    </p> <br />
                    <button @click="sendForm" class="button-form-question mx-auto"
                        :class="datosDelCliente.fullfilled ? 'button--orange' : 'button--orange-disabled'"
                        :disabled="!datosDelCliente.fullfilled">
                        {{ isLoading ? 'Enviando...' : 'Enviar Solicitud' }}
                    </button>
                </div>
            </div>
            <FinalStep v-show="identifier === 9" :whatsapp-url="formattedWhatsappUrl" />
        </div>
    </div>
</template>
<script>
import axios from "axios";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import FirstStep from "@/components/formSteps/firstStep.vue";
import FinalStep from "@/components/formSteps/finalStep.vue";

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
    name: "StepperFormPage",
    data() {
        return {
            splideOptions: {
                type: 'loop',
                autoplay: true,
                perPage: 1,
                pagination: false,
                centered: true,
                drag: true,
                mediaQuery: 'min',
                classes: {

                    pagination: 'splide__pagination your-class-pagination', // container
                    page: 'splide__pagination__page your-class-page', // each button
                    prev: 'splide__arrow--prev !hidden',
                    next: 'splide__arrow--next !hidden',
                },
                breakpoints: {
                },
            },
            steppage: 0,
            goterasHumedadEnDomicilio: null,
            tipoDeConstruccion: null,
            otroTipoDeConstruccion: null,
            productoInteresado: [],
            otroTipodeProductoInteresado: null,
            dondeRequieresElServicio: {
                ubicacion: null,
                calle: null,
                noExterior: null,
                noInterior: null,
                colonia: null,
                referencias: null,
                fullfilled: false
            },
            datosDelCliente: {
                nombre: null,
                telefono: null,
                correo: null,
                fechaCita: null,
                fullfilled: false
            },
            identificacion: null,
            mantenimientoPreventivo: null,
            identifier: 1, // 1 initial step
            StepsPaths: [
                [1, 2, 3, 5, 7, 8, 9],
                [1, 2, 4, 6, 8, 9],
                [1, 2, 4, 6, 5, 7, 8, 9],
                [1, 2, 4, 8, 9]

            ],
            actualPath: [1, 2, 3, 5, 7, 8, 9],
            actualPathIndex: 0,
            placeOptions: ["Cancún", "Playa del carmen", "Isla blanca",
                "Isla Mujeres", "Cozumel", "Tulúm", "Chetumal", "Bacalar", "Mérida", "CDMX"
            ],
            isLoading: false,
            fullPage: true

        };
    },
    components: { Splide, SplideSlide, FirstStep, FinalStep,Loading },
    methods: {
        nextStep() {
            window.scrollTo(0, 0);
            // Domicilio
            if (this.goterasHumedadEnDomicilio == "Si") {
                this.actualPath = this.StepsPaths[0];
                this.identifier = this.actualPath[this.actualPathIndex];
                this.actualPathIndex = 0;
            }
            // Constructor o encargado de mantenimiento o particular
            if (this.goterasHumedadEnDomicilio == "No") {
                if (this.identificacion == "Particular") {

                    this.actualPath = this.StepsPaths[1];
                    this.identifier = this.actualPath[this.actualPathIndex];
                    this.actualPathIndex = 0;
                    if (this.mantenimientoPreventivo == "No") {
                        this.actualPath = this.StepsPaths[1];
                        this.actualPathIndex = 1;
                        this.identifier = this.actualPath[this.actualPathIndex];
                    }
                    //Particular con mantenimiento preventivo
                    if (this.mantenimientoPreventivo == "Si") {
                        this.actualPath = this.StepsPaths[2];
                        this.actualPathIndex = 2;
                        this.identifier = this.actualPath[this.actualPathIndex];
                    }
                }
                //Empresa
                else {
                    this.actualPath = this.StepsPaths[3];
                    this.actualPathIndex = 3;
                }
            }
            this.steppage++;
            const nextStep = this.actualPath[this.steppage];
            this.identifier = nextStep;
        },
        handleChangePath() {
            this.actualPath = this.StepsPaths[this.actualPathIndex];
            this.steppage = 0;
            this.identifier = this.actualPath[this.steppage];
        },
        prevStep() {
            if (this.identifier === 3) {
                this.tipoDeConstruccion = null;
                this.otroTipoDeConstruccion = null;
            }
            this.steppage--;
            const prevStep = this.actualPath[this.steppage];
            this.identifier = prevStep;
        },
        sendForm() {
            this.isLoading = true;
            try {
                const response = axios.post("https://api.web3forms.com/submit", {
                    access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // TODO: Replace with your actual Web3Forms access key
                    subject: "Nuevo Contacto Rycza SPA",
                    goterasHumedadEnDomicilio: this.goterasHumedadEnDomicilio,
                    tipoDeConstruccion: this.tipoDeConstruccion,
                    otroTipoDeConstruccion: this.otroTipoDeConstruccion,
                    productoInteresado: this.productoInteresado,
                    otroTipodeProductoInteresado: this.otroTipodeProductoInteresado,
                    dondeRequieresElServicio: this.dondeRequieresElServicio,
                    datosDelCliente: this.datosDelCliente,
                    identificacion: this.identificacion,
                    mantenimientoPreventivo: this.mantenimientoPreventivo,
                });
            } catch (error) {
                console.error("Error submitting form", error);
            }

            this.isLoading = false;
            this.nextStep();
        },
        checkproductoInteresado(producto) {
            if (this.productoInteresado.includes(producto)) {
                return true;
            } else {
                return false;
            }
        },
    },
    watch: {
        dondeRequieresElServicio: {
            handler(newValue, oldValue) {
                const obj = this.dondeRequieresElServicio;
                if (obj.ubicacion && obj.calle && obj.noExterior && obj.noInterior && obj.colonia && obj.referencias) {
                    this.dondeRequieresElServicio.fullfilled = true;
                } else {
                    this.dondeRequieresElServicio.fullfilled = false;
                }
            },

            deep: true

        },
        datosDelCliente: {
            handler(newValue, oldValue) {
                const obj = this.datosDelCliente;
                if (obj.nombre && obj.telefono && obj.correo) {
                    this.datosDelCliente.fullfilled = true;
                } else {
                    this.datosDelCliente.fullfilled = false;
                }
            },

            deep: true

        }
    },
    computed: {
        stepperCointainerClasses() {
            return {
                'bg-glass-rain w-full': this.identifier === 1,
                'bg-glass-rain-final w-full': this.identifier === 9,
            }
        },
        identifierContainerClasses(){
            return {
                'lg:max-w-[80%]': this.identifier != 5,
                'lg:max-w-[95%] 2xl:max-w-[80%]': this.identifier === 5,
            }
        },
        otroTipodeProductoInteresadoChecked() {
            let validationProducto = false;
            if (this.productoInteresado.length > 0)
                validationProducto = true;
            if (this.otroTipodeProductoInteresado)
                validationProducto = true;

            return validationProducto;
        },
        tipoDeConstruccionChecked() {
            let validation = false;
            if (this.tipoDeConstruccion && this.tipoDeConstruccion != "Otro") {
                validation = true;
            }
            if (this.tipoDeConstruccion == 'Otro' && this.otroTipoDeConstruccion) {
                validation = true;
            }
            return validation;
        },
        percentageofprogress() {
            if (this.identifier == 9) {
                return 100;
            }
            return (this.steppage * 100) / this.actualPath.length;
        },
        progressBarStyle() {
            return {
                width: `${this.percentageofprogress}%`
            }
        },
        prefillData() {
            return {
                name: this.datosDelCliente.nombre,
                email: this.datosDelCliente.correo,
            }
        },
        formattedWhatsappUrl() {
            const baseUrl = "https://wa.me/529983717937?text=";
            const constructionType = this.tipoDeConstruccion === 'Otro' ? this.otroTipoDeConstruccion : this.tipoDeConstruccion;
            const products = [...this.productoInteresado];
            if (this.otroTipodeProductoInteresado) products.push(this.otroTipodeProductoInteresado);
            
            const message = `*Nuevo Presupuesto Rycza*\n` +
                `--------------------------\n` +
                `*Nombre:* ${this.datosDelCliente.nombre || 'N/A'}\n` +
                `*Email:* ${this.datosDelCliente.correo || 'N/A'}\n` +
                `*Teléfono:* ${this.datosDelCliente.telefono || 'N/A'}\n` +
                `*Problema:* ${this.goterasHumedadEnDomicilio || 'N/A'}\n` +
                `*Tipo de construcción:* ${constructionType || 'N/A'}\n` +
                `*Interés:* ${products.join(', ') || 'N/A'}\n` +
                `*Ubicación:* ${this.dondeRequieresElServicio.calle || ''}, ${this.dondeRequieresElServicio.colonia || ''}, ${this.dondeRequieresElServicio.ubicacion || ''}\n` +
                `*Mantenimiento:* ${this.mantenimientoPreventivo || 'N/A'}`;
            
            return baseUrl + encodeURIComponent(message);
        }
    }
};
</script>
<style>
@media (max-width: 768px) {
    .identifier-container {
        padding: 2.5rem;
    }
}

.identifier-container {
    min-height: 44vh;
}

.bg-glass-rain {
    background-size: cover;
    background-image: url("@/assets/img/Contact/INICIOFORM.webp");
}

@media (max-width: 768px) {
    .bg-contact-form {
        background-image: url("@/assets/img/Contact/INICIOFORM.webp");
    }
}

.bg-glass-rain-final {
    background-image: url("@/assets/img/Contact/INICIOFORM.webp");
    background-repeat: no-repeat;
    background-position: top center;
    object-fit: cover;
    border-radius: 7px;
    background-size: cover;
}

.radio-toolbar input[type="radio"],
.radio-toolbar-orange input[type="checkbox"] {
    opacity: 0;
    position: fixed;
    width: 0;
}

.radio-toolbar label {
    background: #fff 0% 0% no-repeat padding-box;
    border: 2px solid #1475E0;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 33px;
    opacity: 1;
    min-width: 26%;
    text-align: center;
    padding: 10px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.radio-toolbar label:hover {
    background: #1475E0;
    color: #fff;
}


.radio-toolbar input[type="radio"]:checked+label {
    background: #1475E0;
    color: #fff;
}

.rycza-input {

    min-height: 60px;
    border: #55ABDA solid 2px;
    padding-left: 1em;
}

.min-h-inerhit {
    min-height: inherit;
}
</style>
