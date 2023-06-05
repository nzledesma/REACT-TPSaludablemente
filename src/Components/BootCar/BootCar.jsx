import Carousel from 'react-bootstrap/Carousel'

const BootCar = () => {
  return (
        
    <Carousel variant="dark" style={InstagramStyle}>

      <Carousel.Item>
        <div style={InstElementStyle}>
        <img
          style={figureStyle}
          src="https://http2.mlstatic.com/D_NQ_NP_2X_742215-MLA52148179446_102022-F.webp"
          alt="Second slide"
        />
        <img
          style={figureStyle}
          src="https://http2.mlstatic.com/D_NQ_NP_2X_882928-MLA52147478580_102022-F.webp"
          alt="Second slide"
        />
        <img
          style={figureStyle}
          src="https://http2.mlstatic.com/D_NQ_NP_2X_682163-MLA52521262873_112022-F.webp"
          alt="Second slide"
        />
        
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={InstElementStyle}>
          <img
            style={figureStyle}
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/302/267/products/311-0c0c8e894af65ac22216099587208824-480-0.jpg"
          />
          <img 
            style={figureStyle}
            src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/l/e/lenteja-nacional-x-1.25-kg.png"
          />
          <img 
            style={figureStyle}
            src="https://d2r9epyceweg5n.cloudfront.net/stores/728/962/products/_mlb5603-copia1-7ff9ae218fa155bbd916521082075598-640-0.jpg"
          />
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={InstElementStyle}>
          <img
            style={figureStyle}
            src="https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/f/i/fideo-de-arroz-tradicional-soyarroz-x-300-gr.jpg"
          />
          <img 
            style={figureStyle}
            src="https://http2.mlstatic.com/D_NQ_NP_2X_882321-MLA49877056053_052022-F.webp"
          />
          <img 
            style={figureStyle}
            src="https://carrefourar.vtexassets.com/arquivos/ids/179560/7798151952332_01.jpg?v=637468582746330000"
          />
          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={InstElementStyle}>
          <img
            style={figureStyle}
            src="https://http2.mlstatic.com/D_NQ_NP_2X_789096-MLA49063764725_022022-F.webp"
          />
          <img 
            style={figureStyle}
            src="https://thefoodmarketar.vtexassets.com/arquivos/ids/158859-800-auto?v=637953116122730000&width=800&height=auto&aspect=true"
          />
          <img 
            style={figureStyle}
            src="https://cdn.newgarden.com.ar/media/catalog/product/cache/02bceca3fdafc6c016b45da9776eeadf/y/e/yerba-mate-hierbas-del-oasis-organica_1.jpg"
          />
        </div>
        </Carousel.Item>
      
    </Carousel>
  );
}

export default BootCar

const InstagramStyle = {
    maxWidth: "100%",    
    maxHeight: "600px",
    alignItems: "center",
    objectFit: "cover",
    margin: "auto",
  }

  const figureStyle = {
    width: "300px",     
    height: "300px",
    border: "2px solid black",
    borderRadius: "10px",
    alignItems: "center",
    margin: "20px",
    objectFit: "cover",
  }
  
  const InstElementStyle = {
    backgroundColor: "#D9D9D9",
    width: "100%",
    alignItems: "spacebetween",
    padding: "5px",
    margin: "auto",
  }



