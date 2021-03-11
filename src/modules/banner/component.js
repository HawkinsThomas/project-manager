const Banner = ({ text, children }) => {
  return ( 
    <div className="banner">
      <h1>{ text }</h1>
      { children }
    </div>
   );
}
 
export default Banner;