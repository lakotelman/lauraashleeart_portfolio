import bg from "../public/images/betterwaves.svg"

export default function BlogSingleHeader(props) {
  return (
    <div className="header-background-small" style={{backgroundImage:`url(${bg.src})`}}>
      {props.children}
      
    </div>
  );
}
