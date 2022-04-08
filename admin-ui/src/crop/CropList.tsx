import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FARM_TITLE_FIELD } from "../farm/FarmTitle";
import { PLANT_TITLE_FIELD } from "../plant/PlantTitle";

export const CropList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Crops"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Farm" source="farm.id" reference="Farm">
          <TextField source={FARM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Plowed" source="isPlowed" />
        <TextField label="Next Growth" source="nextGrowth" />
        <ReferenceField label="Plant" source="plant.id" reference="Plant">
          <TextField source={PLANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Stage" source="stage" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Watered At" source="wateredAt" />
      </Datagrid>
    </List>
  );
};
