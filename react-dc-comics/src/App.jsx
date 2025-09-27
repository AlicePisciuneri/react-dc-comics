import AppHeader from "./components/AppHeader.jsx";
import AppMain from "./components/AppMain.jsx";
import AppFooter from "./components/AppFooter.jsx";
import ProductCard from "./components/ProductCard.jsx";
import comics from "./comics.js";
import BlueBar from "./components/BlueBar.jsx";


function App() {
  return (
    <>
      <AppHeader />

      {/* Stampo le card  */}
      <main className="content">
        {comics.map((comic, index) => (
          <ProductCard
            key={index}
            thumb={comic.thumb}
            series={comic.series}
            type={comic.type}
            price={comic.price}
          />
        ))}
      </main>
      <BlueBar />

      <AppFooter />
    </>
  );
}

export default App;






