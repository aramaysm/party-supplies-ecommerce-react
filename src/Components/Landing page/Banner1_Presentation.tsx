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
    <div className="row w-100 flex-row-reverse pb-2 pt-2" >
      <div className="col-lg-5 mt-2 col-sm-12 col-12 j-c-c p-2">
        <div className="card p-0 withoutbg-and-border">
          <img src={props.image} height="354px" width="400px" />
        </div>
      </div>
      <div className="col-lg-7 mt-2 col-sm-12 col-12 d-flex align-items-center">
        <div className="card m-2 p-1 p-lg-2 p-sm-1 w-100 withoutbg-and-border p-2">
          <div className="card-title p-0 ">
            <h2 className="title-lp  fw-bold">
              {props.title_color1 + " "}
              <small className="fs-2 border-bottom-yellow color-blue">
                {props.title_color2}
              </small>
            </h2>
          </div>
          <div className="card-header  p-0 mt-5 withoutbg-and-border text-center text-sm-center text-lg-start ">
            <h5 className="title-lp ">{props.subtitle}</h5>
          </div>
          <div className="card-footer d-flex justify-content-center justify-content-sm-center justify-content-lg-start mt-5 p-0 withoutbg-and-border">
            <input
              type="submit"
              className=" button button-primary-blue"
              value={props.textButton}
              onClick={props.onButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
