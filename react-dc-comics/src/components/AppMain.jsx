import comics from "../comics.js";
import ProductCard from "./ProductCard.jsx";

export default function AppMain() {
    return (
        <main>
            {/* Titolo */}
            <h2 className="section-title">Current Series</h2>

            {/* Container card */}
            <div className="cards-container">
                {comics.map((comic, index) => (
                    <ProductCard
                        key={index}
                        thumb={comic.thumb}
                        price={comic.price}
                        series={comic.series}
                        type={comic.type}
                    />
                ))}
            </div>
        </main>
    );
}


