/* eslint-disable react-hooks/exhaustive-deps */
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
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Swal from 'sweetalert2';
import { doc, updateDoc } from 'firebase/firestore';
import { useAppStore } from '../../AppStore';
import { db } from '../../firebase-config';

const ModifyProduct = ({ closeEventClose, formId, getAllElementsProducts }) => {
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

  const ModifyProduct = async () => {
    const productModifyFindId = doc(db, 'products', formId?.id);
    const newFieldsModify = {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    };
    await updateDoc(productModifyFindId, newFieldsModify);
    getAllElementsProducts();
    closeEventClose();
    Swal.fire('Submitted', 'You file has been updated.', 'success');
  };

  React.useEffect(() => {
    console.log('ID', formId?.id);
    setName(formId?.name);
    setCategory(formId?.category);
    setPrice(formId?.price);
  }, []);

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography id="modal-modal-title" variant="h6" component="h2">
        NEW PRODUCTS
      </Typography>
      <IconButton
        style={{ position: 'absolute', top: '0', right: '0' }}
        onClick={closeEventClose}
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
            <Button variant="contained" onClick={ModifyProduct}></Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default ModifyProduct;
