"use client";

import Link from "next/link";
import React, {Fragment, useEffect, useState, useMemo} from "react";

import Image from "next/image";
import imagePlaceholder from "../assets/images/ImagePlaceholder.svg";

import productData from "../../public/fakeData/data.json";

const ProductsSlider = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const discount = 20; // Placeholder for the price, replace with actual data from the database.
    const price = 100;

    let imgWidth;
    let imgHeight;

    const setSlidesPerView = () => {
        if (window.innerWidth >= 1280) {
            imgWidth = 200;
            imgHeight = 200;
            return 5; // For xl screens
        } else if (window.innerWidth >= 1024) {
            imgWidth = 170;
            imgHeight = 170;
            return 4; // For lg screens
        } else if (window.innerWidth >= 640) {
            imgWidth = 140;
            imgHeight = 140;
            return 3; // For md screens
        } else {
            imgWidth = 120;
            imgHeight = 120;
            return 1; // For sm screens
        }
    };

    useEffect(() => {
        const slidesPerView = setSlidesPerView();

        const swiper = new Swiper(".mySwiper", {
            slidesPerView: slidesPerView,
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            mousewheel: true,
            keyboard: true,
        });

        // Update the number of slides when the window size changes
        window.addEventListener("resize", () => {
            const newSlidesPerView = setSlidesPerView();
            if (newSlidesPerView !== swiper.params.slidesPerView) {
                swiper.params.slidesPerView = newSlidesPerView;
                swiper.update();
            }
        });
    }, []);
    return (
        <section className="grid grid-cols-1 container w-[1260px] max-md:w-auto h-[626px]">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold text-[#29292E]">Header</h2>
                <Link
                    href="/"
                    alt="Show All Link"
                    className="text-lg font-bold text-[#237943]">
                    Show All
                </Link>
            </div>
            <div className="container mySwiper swiper w-[1200px] max-xl:max-w-4xl max-lg:max-w-2xl max-md:max-w-xl max-sm:max-w-sm h-[557px] pb-5 transition-all ease-in-out duration-300">
                <div className="swiper-wrapper">
                    {productData.products.map((product, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="swiper-slide hover:shadow-xl transition-all hover:transition-all duration-300 hover:duration-300 ease-in-out hover:ease-in-out hover:cursor-pointer hover:scale-x-[1.1] rounded-b-xl hover:z-10 ml-5 mb-4">
                            <Image
                                src={imagePlaceholder}
                                alt={product.title}
                                className="rounded-t-lg w-full h-[310px]"
                                // layout="responsive"
                                // width={150}
                                // height={150}
                            />
                            <div className="">
                                {product.discount && (
                                    <div className="flex flex-row w-full gap-5 ml-6 mt-4">
                                        <p className="bg-[#FDE6D5] w-auto h-auto rounded-[5px] text-[#FA7514] flex justify-center items-center font-bold text-sm py-3 px-2">
                                            &#45;{product.discount}&#37;
                                        </p>
                                        <p className="flex justify-center items-center text-[17px] font-[500] line-through">
                                            &#36;{product.price}
                                        </p>
                                    </div>
                                )}
                                <div className="ml-6">
                                    <p className="text-[#237943] text-lg">
                                        &#36;{product.price}
                                    </p>
                                    <h4 className="">{product.title}</h4>
                                </div>
                            </div>
                            <div className="">
                                {hoveredCard === index && (
                                    <button className="bg-[#237943] h-[41px] rounded-lg w-[80%] py-3 px-4 text-white font-[500] text-lg mb-4 mx-auto flex justify-center items-center mt-[10%]">
                                        Add to Cart
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default ProductsSlider;
