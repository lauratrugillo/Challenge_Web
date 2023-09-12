import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../img/banner1.png'
import img2 from '../img/banner2.png'
import img3 from '../img/banner3.webp'

const Carousel = () => {
  const settings = {
    dots: true, // Mostra os pontos indicativos
    infinite: true, // Permite rolagem infinita
    speed: 500, // Velocidade de transição (em milissegundos)
    slidesToShow: 1, // Número de slides visíveis ao mesmo tempo
    slidesToScroll: 1, // Número de slides rolados a cada vez
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Imagem 1" id='banner' />
        </div>
        <div>
          <img src={img3} alt="Imagem 2" id='banner' />
        </div>
        <div>
          <img src={img2} alt="Imagem 3" id='banner' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;