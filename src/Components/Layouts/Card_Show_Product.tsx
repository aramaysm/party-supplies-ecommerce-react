interface Props {
  image: string;
  title: string;
  subtitle: string;
  textButton: string;
  buttonColor: string;
  bgColor: string;
  onButtonClick: () => void;
}

export const Card_Show_Product = (props: Props) => {
  return (
    <div className={"card shadow h-100  border-with-corners bg-"+ props.bgColor}>
      <div className="card-title mt-3 j-c-c border-with-corners">
        <img src={props.image} className="shadow border-with-corners " height="150px" width="200px" />
      </div>
      <div className="card-header  text-center h-100 withoutbg-and-border">
        <h5>{props.title}</h5>
      </div>
     
        <div className="card-footer j-c-c mt-2 mb-2 withoutbg-and-border">
          <input
            type="submit"
            className=" button button-primary-yellow "
            value={props.textButton}
            onClick={props.onButtonClick}
          />
        </div>
      
    </div>
  );
};
