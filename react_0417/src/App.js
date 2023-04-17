import ProductListItem from "./ProductListItem";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <ProductListItem imgNo={1} name = "MACBOOK AIR" productPriceFormatted = "4,300,000원"/>
        <ProductListItem imgNo={201} name = "MACBOOK AIR Max" productPriceFormatted = "4,400,000원"/>
        <ProductListItem imgNo={2} name = "MACBOOK Pro" productPriceFormatted = "4,500,000원"/>
        <ProductListItem imgNo={48} name = "MACBOOK Pro Plus" productPriceFormatted = "4,600,000원"/>
      </div>
    </>
  );
}

export default App;
