import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import * as React from 'react';
import { db } from '../../firebase-config';
import { EditIcon, DeleteIcon, AddCircleIcon } from '@mui/icons-material';
import Swal from 'sweetalert2';
import AddProduct from './AddProduct';
import { useAppStore } from '../../AppStore';
import ModifyProduct from './ModifyProduct';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListingProduct = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isOpen, setIsOpen] = React.useState(false);
  const [formId, setFormId] = React.useState('');
  const [modifyIsOpen, setModifyIsOpen] = React.useState(false);

  const data = useAppStore(state => state?.data);

  const setData = useAppStore(state => state?.setData);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleModifyIsOpen = () => setModifyIsOpen(true);
  const handleModifyClose = setModifyIsOpen(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const empRefCollection = collection(db, 'products');

  const getAllElementsProducts = async () => {
    const data = await getDocs(empRefCollection);
    setData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  React.useEffect(() => {
    getAllElementsProducts();
  }, []);

  const filterElement = x => {
    if (x) {
      setData([x]);
    } else {
      setData([]);
      getAllElementsProducts();
    }
  };

  const modifyProduct = (id, name, category, price) => {
    const data = {
      id: id,
      name: name,
      price: price,
    };
    setFormId(data);
    handleModifyIsOpen();
  };

  const deleteProductByApi = async id => {
    const productByElemenet = doc(db, 'products', id);
    await deleteDoc(productByElemenet);
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    getAllElementsProducts();
  };

  const removeProduct = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        deleteProductByApi(id);
      }
    });
  };

  return (
    <>
      <div>
        <Modal
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddProduct
              closeEvent={handleClose}
              getAllElementsProduct={getAllElementsProducts}
              empRefCollection={empRefCollection}
            />
          </Box>
        </Modal>

        <Modal
          open={isOpen}
          onClose={modifyIsOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModifyProduct
              closeEventClose={handleModifyClose}
              formId={formId}
              getAllElementsProduct={getAllElementsProducts}
            />
          </Box>
        </Modal>
      </div>
      {data?.length > 0 && (
        <Paper sx={{ width: '98%', overflow: 'hidden', padding: '12px' }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: '20px' }}
          >
            Listing Products
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={data}
              sx={{ width: 300 }}
              onChange={(e, v) => filterElement(v)}
              getOptionLabel={rows => rows.name || ''}
              renderInput={params => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              endIcon={<AddCircleIcon />}
              onClick={handleOpen}
            >
              NEW PRODUCT
            </Button>
          </Stack>
          <Box height={10} />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: '100%' }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100%' }}>
                    Category
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100%' }}>
                    Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100%' }}>
                    date
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: '100%' }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row?.id} align="left">
                          {row?.name}
                        </TableCell>
                        <TableCell key={row?.id} align="left">
                          {row?.category}
                        </TableCell>
                        <TableCell key={row?.id} align="left">
                          {row?.price}
                        </TableCell>
                        <TableCell key={row?.id} align="left">
                          {row?.date}
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: '20px',
                                color: 'blue',
                                cursor: 'pointer',
                              }}
                              className="cursor-pointer"
                              // onClick={() => editUser(row?.id)}
                              onClick={() =>
                                modifyProduct(
                                  row?.id,
                                  row?.category,
                                  row?.price
                                )
                              }
                            />
                            <DeleteIcon
                              style={{
                                fontSize: '20px',
                                color: 'darkred',
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                removeProduct(row?.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

export default ListingProduct;
