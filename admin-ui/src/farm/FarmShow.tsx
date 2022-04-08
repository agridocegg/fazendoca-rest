import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { FARM_TITLE_FIELD } from "./FarmTitle";
import { PLANT_TITLE_FIELD } from "../plant/PlantTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FarmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Display Name" source="displayName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Owner" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Crop" target="FarmId" label="Crops">
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="InventoryItem"
          target="FarmId"
          label="Inventory Items"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Farm" source="farm.id" reference="Farm">
              <TextField source={FARM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Item" source="item.id" reference="Item">
              <TextField source={ITEM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
