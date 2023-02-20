interface Props {
  icon: any;
  iconBackground: string;
  title: string;
  subtitle: string;
}

export const Horizontal_Card = (props: Props) => {
  return (
    <div className="row shadow bg-white rounded-15 mt-3">
      <div className="col-lg-2 col-sm-3 col-3 j-c-c align-items-center d-flex ">
        <div className={"p-2 rounded-15 bg-" + props.iconBackground}>
          {props.icon}
        </div>
      </div>
      <div className="col-lg-10 col-sm-9 col-9 d-flex">
        <div className="card withoutbg-and-border">
          <div className="card-header ps-0 pb-0 withoutbg-and-border">
            <h6 className="title-lp  ">{props.title}</h6>
          </div>
          <div className="card-body  p-0 m-0">
            <p className="subtitle-lp fs-6">{props.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
