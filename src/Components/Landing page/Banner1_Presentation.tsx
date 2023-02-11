import { useState } from "react";

interface Props {
  title_color1: string;
  title_color2: string;
  subtitle: string;
  image: any;
  color: string;
  theme: string;
  onButtonClick: () => void;
  textButton: string;
}

export const Banner1_Presentation = (props: Props) => {
  return (
    <div className="row m-1  flex-row-reverse pb-2 pt-2" >
      <div className="col-lg-4 mt-2 col-sm-12 col-12 j-c-c">
        <div className="card p-0 withoutbg-and-border">
          <img src={props.image} height="270px" width={"320px"} />
        </div>
      </div>
      <div className="col-lg-8 mt-2 col-sm-12 col-12 p-2">
        <div className="card withoutbg-and-border p-2">
          <div className="card-title  p-0  ">
            <h2 className=" color-ligth">
              {props.title_color1 + ", "}
              <small className="fs-2 fst-italic fw-bold border-bottom-yellow">
                {props.title_color2}
              </small>
            </h2>
          </div>
          <div className="card-header mt-5 p-0 withoutbg-and-border  text-sm-center text-lg-start ">
            <h5 className="color-ligth">{props.subtitle}</h5>
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
  );
};
