import React, { useEffect, useState } from "react";
import HomeRenderCard from "./HomeRenderCard";
import ButtonCreateProduct from "../button/ButtonCreateProduct";
import Footer from "../Footer";

type Product = {
  readonly id: number;
  title: string;
  image: string;
  description: string;
  price: number;
};
const RenderCard = () => {
  const [cardReader, setCardReader] = useState<Product[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?sort=desc"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCardReader(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="position-fixed z-20 backdrop-saturate-150 bg-black/50  h-screen w-full">
        <div className="traform flex text-3xl text-white position-absolute left-[50%] w-max right-[50%] top-[50%] align-items-center justify-center">
          <svg className="svg" viewBox="25 25 50 50">
            <circle className="circle" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div>
      <HomeRenderCard cardReader={cardReader} />
      <ButtonCreateProduct />
      <Footer />
    </div>
  );
};

export default RenderCard;
