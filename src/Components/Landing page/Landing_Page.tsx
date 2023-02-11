import { useState } from "react";
import { Banner1_Presentation } from "./Banner1_Presentation";
import image_Banner1 from "../../assets/3d-casual-life-young-girl-and-boy-dancing_2.png";
import image_Banner2 from "../../assets/thinking-woman-png-5a3ab864686602.8055436315137977324276-Recuperado.png";
import { Banner2_Services } from "./Banner2_Services";
import { Banner2_Customized_Products } from "./Banner2_CustomizedProducts";
import { Banner_Features } from "./Banner_Features";
import imageCardFeatures_Delivery from "../../assets/delivery2.png";
import imageCardFeatures_Quality from "../../assets/quality4.png";
import imageCardFeatures_Prices from "../../assets/pricesdown1.png";
import imageCardFeatures_Customized from "../../assets/customized2.png";
import "./LandingPage_Style.css";

export const Landing_Page = () => {
  return (
    <div className="container-fluid p-0 w-100">
      <div className="row pb-2 pt-3" id="banner1_landingpage">
        <Banner1_Presentation
          textButton="Ver productos"
          title_color1={"¡Bienvenido al proveedor de artículos de fiestas"}
          title_color2={"Amy's party!"}
          subtitle={
            "¡Encuentre artículos de fiesta, escolares, juguetes y mucho más... a precios inigualables!"
          }
          color={"pink"}
          theme={"bh"}
          image={image_Banner1}
          onButtonClick={() => console.log("Ir a productos")}
        />
      </div>
      <div className="row pb-2 pt-5 mt-3">
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
      </div>
     
    </div>
  );
};

/*
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
