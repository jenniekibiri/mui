// @mui
import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  CardHeader,
  TableContainer,
} from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// _mock_
import { _appInvoices } from '../../../../_mock';
// components
import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function AppVacationBalance() {

  return (
    <Card>
      <CardHeader title="New Invoice" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Vacation Type</TableCell>
                <TableCell>Current year Allowance</TableCell>
                <TableCell>Used</TableCell>
                <TableCell>Available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_appInvoices.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{`INV-${row.id}`}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{fCurrency(row.price)}</TableCell>
                  <TableCell>
                  {row.category}
                   
                  </TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>



    
    </Card>
  );
}

// ----------------------------------------------------------------------


