import { Card_Show_Features } from "../Layouts/Card_Show_Features";

interface Props {
  title: string;  
  cardsFeatures: Array<any>;
}

export const Banner_Features = (props: Props) => {
  return (
    <div className="card withoutbg-and-border">
      <div className="card-title text-center withoutbg-and-border">
        <h2 className="title-lp">{props.title}</h2>
      </div>
      
      <div className="card-body ">
        <div className="row j-c-a">
          {props.cardsFeatures.map((card, index) => (
            <div className="col-lg-3 col-sm-10 col-10 mt-4">
              <Card_Show_Features
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
