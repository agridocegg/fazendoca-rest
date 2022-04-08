import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";

export const PlantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Plants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Actor" source="actor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Growth Speed" source="growthSpeed" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Items" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Stages" source="stages" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
