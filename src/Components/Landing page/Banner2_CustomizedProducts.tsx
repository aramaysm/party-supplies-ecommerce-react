
interface Props{
    title:string;
    subtitle: string;
    subtitle2:string;
    image: any;
    color: string;
    theme: string;
    onButtonClick: () => void;
    textButton: string;
}

export const Banner2_Customized_Products = (props: Props) => {

    return (
        <div className="row m-1 pb-2 pt-2" >
        <div className="col-lg-4 mt-2 col-sm-12 col-12 j-c-c">
          <div className="card p-0 withoutbg-and-border">
            <img src={props.image} height="350px" width={"320px"} />
          </div>
        </div>
        <div className="col-lg-8 mt-2 col-sm-12 col-12 p-2">
          <div className="card withoutbg-and-border p-2">
            <div className="card-title  p-0  ">
              <h2 className="">
                {props.title }                
              </h2>
            </div>
            <div className="card-header mt-5 p-0 withoutbg-and-border  text-sm-center text-lg-start ">
              <h5 className="color-subtitle">{props.subtitle}             </h5>
                <h5 className="mt-2 color-subtitle">{props.subtitle2}</h5>
            </div>
            <div className="card-footer d-flex justify-content-center justify-content-sm-center justify-content-lg-start mt-5 p-0 withoutbg-and-border">
              <input
                type="submit"
                className=" button button-primary-yellow"
                value={props.textButton}
                onClick={props.onButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    )
}