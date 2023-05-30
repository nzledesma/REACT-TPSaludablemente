import Carousel from 'react-bootstrap/Carousel';

export const BootCar = () => {
  return (
    <Carousel variant="dark" style={InstagramStyle}>
      <Carousel.Item  style={InstItemStyle}>
         <div style={InstElementStyle}> 
          <img style={figureStyle} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/302/267/products/311-0c0c8e894af65ac22216099587208824-480-0.jpg">
          </img>
          <img style={figureStyle} src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/e/lenteja-nacional-x-1.25-kg.png">
          </img>
          <img style={figureStyle} src="https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/_mlb5603-copia1-7ff9ae218fa155bbd916521082075598-640-0.jpg">
          </img>
          <img style={figureStyle} src="https://thefoodmarketar.vtexassets.com/arquivos/ids/158859-800-auto?v=637953116122730000&width=800&height=auto&aspect=true">
          </img>
        </div>
      </Carousel.Item>
      <Carousel.Item  style={InstItemStyle}>
         <div style={InstElementStyle}> 
          <img style={figureStyle} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/302/267/products/311-0c0c8e894af65ac22216099587208824-480-0.jpg">
          </img>
          <img style={figureStyle} src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/e/lenteja-nacional-x-1.25-kg.png">
          </img>
          <img style={figureStyle} src="https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/_mlb5603-copia1-7ff9ae218fa155bbd916521082075598-640-0.jpg">
          </img>
          <img style={figureStyle} src="https://thefoodmarketar.vtexassets.com/arquivos/ids/158859-800-auto?v=637953116122730000&width=800&height=auto&aspect=true">
          </img>
        </div>
      </Carousel.Item>
      <Carousel.Item  style={InstItemStyle}>
      <div style={InstElementStyle}> 
          <img style={figureStyle} src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/302/267/products/311-0c0c8e894af65ac22216099587208824-480-0.jpg">
          </img>
          <img style={figureStyle} src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/e/lenteja-nacional-x-1.25-kg.png">
          </img>
          <img style={figureStyle} src="https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/_mlb5603-copia1-7ff9ae218fa155bbd916521082075598-640-0.jpg">
          </img>
          <img style={figureStyle} src="https://thefoodmarketar.vtexassets.com/arquivos/ids/158859-800-auto?v=637953116122730000&width=800&height=auto&aspect=true">
          </img>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

const InstagramStyle = {  
    //border: "2px solid red",
    maxWidth: "100%",    
    maxHeight: "600px",
    alignItems: "center",
    objectFit: "cover",
  }
  const InstItemStyle = {
    //border: "2px solid blue",
    maxWidth: "100%",
    maxHeight: "440px",
    alignItems: "center",
    objectFit: "cover",
    
  }
  const figureStyle = {
    width: "300px",     
    height: "300px",
    border: "2px solid black",
    borderRadius: "10px",
    alignItems: "center",
    margin: "5px",
    objectFit: "cover",
  }
  
  const InstElementStyle = {
    backgroundColor: "#D9D9D9",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    objectFit: "cover",
    
  }