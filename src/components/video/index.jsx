/* 1.4.2 - Control de audio [A]

Una forma sencilla de pausar, silenciar
o ajustar el volumen de cualquier audio que se reproduzca
automáticamente durante más de 3 segundos en la interfaz.
*/

import "./style.css";

const Video = () => {
  return (
    <div className="container-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VtV1-AbSU_A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
