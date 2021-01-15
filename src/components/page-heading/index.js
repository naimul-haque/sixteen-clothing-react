const PageHeading = ({ heading, subHeading }) => {
  return (
    <div className="page-heading products-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h4> {subHeading} </h4>
              <h2> {heading} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default PageHeading;