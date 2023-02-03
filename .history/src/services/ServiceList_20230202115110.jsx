import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servcesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam necessitatibus reprehenderit aliquam, delectus rerum. In, veritatis assumenda minima excepturi necessitatibus saepe? Vero distinctio, non illo ullam ex deleniti ipsam."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam necessitatibus reprehenderit aliquam, delectus rerum. In, veritatis assumenda minima excepturi necessitatibus saepe? Vero distinctio, non illo ullam ex deleniti ipsam."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsam necessitatibus reprehenderit aliquam, delectus rerum. In, veritatis assumenda minima excepturi necessitatibus saepe? Vero distinctio, non illo ullam ex deleniti ipsam."
    },
]

const ServiceList = () => {
  return (
    <div>ServiceList</div>
  )
}

export default ServiceList