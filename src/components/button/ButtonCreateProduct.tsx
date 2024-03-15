import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormCreateProduct, { AddProduct } from "./FormCreateProduct";

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  color: "#FFFFFF",
  p: 4
};

const ButtonCreateProduct = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = React.useState<AddProduct | null>(null);

  const getDataForm = (product: AddProduct) => {
    setFormData(product);
  };

  async function createProduct() {
    try {
      if (formData) {
        const postProduct = await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        });
        const res = await postProduct.json();
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
    }
  }

  return (
    <div className="fixed left-5 bottom-10 z-50">
      <button
        onClick={() => handleOpen()}
        className="bg-slate-700 py-3 px-3 rounded-full text-stone-100"
      >
        <AddCircleIcon className="text-4xl"/>
      </button>
      <FormCreateProduct
        getDataForm={getDataForm}
        handleOpen={handleOpen}
        handleClose={handleClose}
        createProduct={createProduct}
        open={open}
        style={style}
      />
    </div>
  );
};

export default ButtonCreateProduct;
