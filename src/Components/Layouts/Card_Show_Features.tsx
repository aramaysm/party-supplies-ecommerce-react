interface Props {
  title: string;
  description: string;
  image: any;
}

export const Card_Show_Features = (props: Props) => {
  return (
    <div className="card h-100 w-100 shadow rounded-15 border-none" id="card-features">
      <div className="card-title text-center withoutbg-and-border">
        <div className=" withoutbg-and-border j-c-c">
          <img src={props.image} height="150px" width={"160px"} />
        </div>
      </div>
      <div className="card-header text-center withoutbg-and-border">
        <h5 className="title-lp">{props.title}</h5>
      </div>
      <div className="card-body text-center">
        <a className="subtitle-lp">{props.description}</a>
      </div>
    </div>
  );
};
