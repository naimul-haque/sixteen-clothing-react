const Pagination = () => {
  return (  
    <div className="col-md-12">
      <ul className="pages">
        <li className="active"><a href="/">1</a></li>
        <li><a href="/">2</a></li>
        <li><a href="/">3</a></li>
        <li><a href="/">4</a></li>
        <li><a href="/"><i className="fa fa-angle-double-right"></i></a></li>
      </ul>
    </div>
  );
}
 
export default Pagination;