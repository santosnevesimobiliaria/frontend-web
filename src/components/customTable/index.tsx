import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

interface CustomTableProps {
  headItens: { [key: string]: string };
  bodyItens: Array<{ [key: string]: any }>;
}

function CustomTable({ headItens, bodyItens }: CustomTableProps) {
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            {Object.values(headItens).map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {bodyItens.map((item, rowIndex) => (
            <Tr key={rowIndex}>
              {Object.keys(headItens).map((key, cellIndex) => {
                const keys = key.split('.');
                let value: any = item;
                keys.forEach((k) => {
                  value = value ? value[k] : '';
                });
                return (
                  <Td key={cellIndex}>
                    {typeof value === 'object' ? value : String(value)}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
