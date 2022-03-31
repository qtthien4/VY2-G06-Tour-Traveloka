import React, { Component } from "react";
import Slider from "react-slick";

export default class SlideShow extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2>Fade</h2>
                <Slider {...settings}>
                    <div>
                        <img src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-429b876c-9a30-466a-8482-13b6ba51a57d.jpeg?_src=imagekit&tr=c-at_max,h-512,q-60,w-720" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-159a44da-8d6a-4194-8520-e6a77c8e2fbc.jpeg?_src=imagekit&tr=dpr-2,c-at_max,h-1280,q-60,w-720" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-7ced567f-685d-40c5-b557-b17102d0f88c.jpeg?_src=imagekit&tr=c-at_max,h-1280,q-60,w-720" />
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001798092415/Dinner%2520Cruise%2520on%2520Saigon%2520River%2520-%2520Night%2520Tour-072463a9-db44-402f-a947-ea7fddb89801.jpeg?_src=imagekit&tr=c-at_max,h-1280,q-60,w-720" />
                    </div>
                </Slider>
            </div>
        );
    }
}