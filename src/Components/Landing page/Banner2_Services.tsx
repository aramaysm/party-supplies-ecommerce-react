import { Card_Show_Product } from "../Layouts/Card_Show_Product";
import image_Card1 from "../../assets/05bf555fe2331d718852a77a25792d08.png";
import image_Card2 from "../../assets/D_NQ_NP_777495-MLM49698178609_042022-W.jpg";
import image_Card3 from "../../assets/34496371e836a8b6d1dbc797c00dc62f.png";
import image_Card4 from "../../assets/BNMRZLMHZVFQZJ7G73URUSCSWA.png";

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export const Banner2_Services = (props: Props) => {
  return (
    <div className="card withoutbg-and-border mt-3">
      <div className="card-title withoutbg-and-border text-center">
        <h1>{props.title}</h1>
      </div>
      <div className="card-header withoutbg-and-border text-center">
        <h5>{props.subtitle}</h5>
      </div>
      <div className="card-body">
        <div className="row j-c-a">
          <div className="col-lg-3 col-11 col-sm-11 mt-4 ">
            <Card_Show_Product
              image={image_Card1}
              title={"Artículos por temática"}
              subtitle={""}
              textButton={"Ver productos"}
              buttonColor={"button-primary-yellow"}
              bgColor={"white"}
              onButtonClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="col-lg-3 col-11 col-sm-11 mt-4 ">
            <Card_Show_Product
              image={image_Card2}
              title={"Artículos personalizados"}
              subtitle={""}
              textButton={"Ver productos"}
              buttonColor={"button-primary-yellow"}
              bgColor={"white"}
              onButtonClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="col-lg-3 col-11 col-sm-11 mt-4 ">
            <Card_Show_Product
              image={image_Card3}
              title={"Artículos variados"}
              subtitle={""}
              textButton={"Ver productos"}
              buttonColor={"button-primary-yellow"}
              bgColor={"white"}
              onButtonClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="col-lg-3 col-11 col-sm-11 mt-4 ">
            <Card_Show_Product
              image={image_Card4}
              title={"Artículos de escuela"}
              subtitle={""}
              textButton={"Ver productos"}
              buttonColor={"button-primary-yellow"}
              bgColor={"white"}
              onButtonClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
      <div className="card-footer withoutbg-and-border"></div>
    </div>
  );
};
