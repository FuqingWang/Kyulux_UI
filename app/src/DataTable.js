import { DataGrid } from '@material-ui/data-grid';

export default function DataTable(props) {

  const items = props.data;

  const cols = Object.keys(items[0]).map((val, index) => {
    return {field: val, headerName: val, width: 200};
  });

  const rows = items.map((item, index) => {
    item.id = index;
    return item;
  });

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={cols} pageSize={20} checkboxSelection />
    </div>
  );
}