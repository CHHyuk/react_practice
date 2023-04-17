import ProductListItem from "./ProductListItem";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <ProductListItem imgNo={1} name = "MACBOOK AIR" price = "4,300,000원"/>
        <ProductListItem imgNo={201} name = "MACBOOK AIR Max" price = "4,400,000원"/>
        <ProductListItem imgNo={2} name = "MACBOOK Pro" price = "4,500,000원"/>
        <ProductListItem imgNo={48} name = "MACBOOK Pro Plus" price = "4,600,000원"/>
      </div>
    </>
  );
}

export default App;
