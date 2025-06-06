import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface Supplement {
  name: string;
  dose: string | null;
}

interface Props {
  supplements: Supplement[];
}

const SupplementsTable = ({ supplements }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "text.secondary" }}>SUPPLEMENT</TableCell>
            <TableCell sx={{ color: "text.secondary" }}>DOSAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {supplements.map((supplement, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.03)" },
                transition: "background-color 0.2s",
              }}
            >
              <TableCell sx={{ fontWeight: 500 }}>{supplement.name}</TableCell>
              <TableCell sx={{ py: 2.5, fontWeight: 500 }}>
                <Typography variant="body2">
                  {supplement.dose ? supplement.dose : "Whatever"}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SupplementsTable;
