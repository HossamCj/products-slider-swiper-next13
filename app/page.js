import ProductsSlider from "./components/ProductsSlider";
import products from "../public/fakeData/data.json";

export default function Home() {
    return (
        <main className="max-w-fullxl container">
            <ProductsSlider
                products={products}
                showAllLink={`/`}
                header={"Featured Items"}
            />
        </main>
    );
}
