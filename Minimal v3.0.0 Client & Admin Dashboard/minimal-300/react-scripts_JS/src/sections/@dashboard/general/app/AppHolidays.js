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
// _mock_
import { _appInvoices } from '../../../../_mock';
// components
import Scrollbar from '../../../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function AppHoliday() {

  return (
    <Card>
      <CardHeader title="National holidays" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Holiday Name</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_appInvoices.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{`INV-${row.id}`}</TableCell>
                  <TableCell>{row.category}</TableCell>
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

