const CursorLight = ({ position }) => {
    const style = {
      left: position.x,
      top: position.y,
    };
  
    return  <div className="cursor-dark" style={style}>
            <div className="cursor-light" style={style}>
              <div className="cursor-lighter" style={style}>
              </div>
            </div>
            </div>;
  };
  export default CursorLight;