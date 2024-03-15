import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
  styled
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Close } from "@mui/icons-material";
export type AddProduct = {
  title: string;
  image: File | null;
  description: string;
  price: number;
};

type ErrorType = {
  title?: string;
  price?: string;
};

type CreateProductFormProps = {
  getDataForm: (product: AddProduct) => void;
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  style: React.CSSProperties;
  createProduct: () => void;
};

const FormCreateProduct: React.FC<CreateProductFormProps> = ({
  getDataForm,
  handleOpen,
  handleClose,
  open,
  style,
  createProduct
}) => {
  const [products, setProducts] = useState<AddProduct>({
    title: "",
    price: 0,
    description: "",
    image: null,
  });

  useEffect(() => {
    getDataForm(products);
  }, [products, getDataForm]);
  const [error, setError] = useState<ErrorType>();

  useEffect(() => {
    const newError: ErrorType = {};
    if (products.title.length && products.title.length < 3) {
      newError.title = "Title must be at least 3 characters";
    }
    if (products.price && Number(products.price) <= 0) {
      newError.price = "Price must be greater than zero";
    }
    setError(newError);
  }, [products.title, products.price]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const file = e.target.files?.[0];
    setProducts((prevProduct) => ({
      ...prevProduct,
      [id]: value,
      image: file
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProducts((prevProduct) => ({
        ...prevProduct,
        image: file
      }));
    }
  };

  const renderImage = () => {
    if (products.image) {
      return <img src={URL.createObjectURL(products.image)} alt="Uploaded" />;
    } else {
      return null;
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            className="flex items-center justify-between"
          >
            <p className="text-slate-700">Creat New Product</p>
            <div className="cursor-pointer p-2 bg-slate-600 py-1 rounded-md">
                <Close onClick={handleClose}/>
            </div>
          </Typography>
          <form className="border-t-[1px]  border-slate-400 mt-3">
            <FormControl
              className="grid gap-3 w-full p-2 "
              sx={{ mt: 1, color: "white" }}
            >
              <div className="w-full text-sky-500">
                <TextField
                  label="Title"
                  type="text"
                  variant="standard"
                  id="title"
                  value={products.title}
                  onChange={handleChange}
                  className="text-sky-500 w-full"
                />
                {error?.title && (
                  <p className="text-red-500 text-xs">{error.title}</p>
                )}
              </div>
              <div className="w-full">
                <TextField
                  label="Price"
                  type="number"
                  variant="standard"
                  id="price"
                  className="text-sky-500 w-full"
                  value={products.price}
                  onChange={handleChange}
                  sx={{ mt: 1}}
                />
                {error?.price && (
                  <p className="text-white text-xl">{error.price}</p>
                )}
              </div>
              <div className="w-full">
                <TextField
                  label="Description"
                  type="text"
                  variant="standard"
                  id="description"
                  className="text-sky-500 w-full"
                  value={products.description}
                  onChange={handleChange}
                />
              </div>
              <div className="w-16">
                {renderImage()}
              </div>
              <div>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload file
                  <VisuallyHiddenInput
                    type="file"
                    width={150}
                    onChange={handleFileChange}
                  />
                </Button>
              </div>
            </FormControl>
          </form>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 3, }}
            className="grid gap-2 border-t-[1px] border-slate-400 pt-3"
          >
            <Button variant="outlined" onClick={createProduct}>
              Create
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default FormCreateProduct;
