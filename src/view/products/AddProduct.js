import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CurrencyRupeeIcon } from '@mui/icons-material';
// import { getDoc, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { addDoc } from 'firebase/firestore';
import { useAppStore } from '../../AppStore';
// import { collection, addDoc, getAllElement } from 'firebase/firestore'; // or getDocs

const AddProduct = ({
  closeEvent,
  getAllElementsProduct,
  empRefCollection,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const setData = useAppStore(state => state.setData);

  const handleChangeName = e => {
    setName(e?.target?.value);
  };

  const handleChangeCategory = e => {
    setCategory(e?.target?.value);
  };

  const handleChangePrice = e => {
    setPrice(e?.target?.value);
  };

  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const createdNewProduct = async () => {
    await addDoc(empRefCollection, {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    });
    getAllElementsProduct();
    closeEvent();
    Swal.fire('Submitted', 'You file has been submitted.', 'success');
  };
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        NEW PRODUCTS
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            value={name}
            onChange={handleChangeName}
            sx={{ minWidth: '100%' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="category"
            variant="outlined"
            size="small"
            select
            value={category}
            onClick={handleChangeCategory}
            sx={{ minWidth: '100%' }}
          >
            {currencies.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            type="number"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
            value={price}
            onClick={handleChangePrice}
            sx={{ minWidth: '100%' }}
          />
        </Grid>
        <Grid item sx={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createdNewProduct}></Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default AddProduct;
