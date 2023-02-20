import { useState } from "react";
import { Banner1_Presentation } from "./Banner1_Presentation";
import image_Banner1 from "../../assets/pequenos-mejores-amigos-felices-celebrando_2.png";

import "./LandingPage_Style.css";
import imgBannerWhyChoose from "../../assets/nina_chupete.png";
import { Banner2_WhyChooseUs } from "./Banner2_WhyChooseUs";
import { TaskAlt, Brush, LocalShipping, PriceCheck } from "@mui/icons-material";


let cardsList = [
{
  icon: <TaskAlt sx={{color:"#ffe100"}} fontSize="large" />,
  title: "Calidad",
  subtitle: "¡Productos con materiales exclusivos!"
},
{
  icon: <Brush sx={{color:"#ffe100"}} fontSize="large" />,
  title: "Personalización",
  subtitle: "¡Personalizamos productos totalmente a su gusto!"

},
{
  icon: <LocalShipping sx={{color:"#ffe100"}} fontSize="large"/>,
  title: "Servicio a domicilio",
  subtitle: "¡Servicio a domicilio en toda La Habana!"
},
{
  icon: <PriceCheck sx={{color:"#ffe100"}} fontSize="large"/>,
  title: "Precios accesibles",
  subtitle: "¡Precios accesibles, para disfrutar de su fiesta soñada!"
}
  ];


export const Landing_Page = () => {
  return (
    <div className="container-fluid p-0 " id="landignpage">
      <div className="row pb-2 pt-3" id="banner1_landingpage">
        <Banner1_Presentation
          textButton="Ver productos"
          title_color1={"¡Somos la razón de "}
          title_color2={"miles de sonrisas!"}
          subtitle={
            "¡Encuentre artículos de fiesta, escolares, juguetes y mucho más... a precios inigualables!"
          }
          color={"pink"}
          theme={"bh"}
          image={image_Banner1}
          onButtonClick={() => console.log("Ir a productos")}
        />
      </div>
      <div className="row pb-2 pt-5 mt-5" id="banner2_landingpage" >
       <Banner2_WhyChooseUs cardsList={cardsList}
        image={imgBannerWhyChoose}
         title1={"¿Por qué elegir "}
          title2={"Amy's ?"} />
      </div>
     
    </div>
  );
};

/*
 <Banner_Features
          title={"¿Por qué elegirnos?"}
          cardsFeatures={[
            {
              title: "Calidad",
              description:
                "Nuestros productos son de la mejor calidad, con materiales resistentes y diseños exclusivos",
              image: imageCardFeatures_Quality,
            },
            {
              title: "Personalización",
              description:
                "Personalizamos productos exclusivamente para usted, totalmente a su gusto y decisión.",
              image: imageCardFeatures_Customized,
            },
            {
              title: "Servicio a domicilio",
              description:
                "Ofrecemos servicio a domicilio en toda la Habana a precios accesibles.",
              image: imageCardFeatures_Delivery,
            },
            {
              title: "Precios accesibles",
              description:
                "Nuestros precios son accesibles y competitivos, para que pueda disfrutar de la fiesta de sus sueños.",
              image: imageCardFeatures_Prices,
            },
          ]}
        />
<Banner2_Services
          title={"Nuestros servicios"}
          subtitle={
            "Nuestro objetivo es hacer realidad la fiesta de sus sueños, para cumplirlo, ofrecemos esta gama de servicios y más..."
          }
          image={""}
        />

         <div className="row pb-2 pt-5">
        <Banner2_Customized_Products
          title={"Productos personalizados"}
          subtitle={
            "¿Siente que no encontró lo que buscaba o que busca algo imposible? "
          }
          subtitle2={
            "¡No se preocupe! Personalizamos productos exclusivamente para usted, totalmente a su gusto y decisión."
          }
          image={image_Banner2}
          color={"pink"}
          theme={"bh"}
          onButtonClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          textButton={"Ver más"}
        />
      </div>
*/
