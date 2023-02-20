import { Horizontal_Card } from "../Layouts/Horizontal_Card";

interface Props {
  cardsList: Array<any>;
  image: any;
  title1: string;
  title2: string;
}

export const Banner2_WhyChooseUs = (props: Props) => {
  return (
    <div className="row m-0 j-c-c rounded-15 ">
      <div className="col-lg-11 col-sm-12 col-12">
        <div className="row j-c-a ">
        <div className="col-lg-5 col-sm-12 col-12 j-c-c align-items-center">
            <div className="card withoutbg-and-border j-c-c align-items-center">
              <img src={props.image} width="300px" height="360px" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12 m-2">
            <div className="card withoutbg-and-border p-0 m-0">
              <div className="card-header withoutbg-and-border">
                <h2 className="title-lp  fw-bold">
                  {props.title1 + " "}
                  <small className="fs-2  color-yellow">{props.title2}</small>
                </h2>
              </div>
              <div className="card-body  ">
                <div className="col-lg-11 col-sm-12 col-12">
                  {props.cardsList.map((item) => (
                    <Horizontal_Card
                      icon={item.icon}
                      iconBackground={"yellow-light"}
                      title={item.title}
                      subtitle={item.subtitle}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
