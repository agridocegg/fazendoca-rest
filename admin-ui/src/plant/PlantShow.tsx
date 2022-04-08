import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PLANT_TITLE_FIELD } from "./PlantTitle";
import { ITEM_TITLE_FIELD } from "../item/ItemTitle";

export const PlantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Actor" source="actor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Growth Speed" source="growthSpeed" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Items" source="item.id" reference="Item">
          <TextField source={ITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Stages" source="stages" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Crop" target="PlantId" label="Crops">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
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
      </SimpleShowLayout>
    </Show>
  );
};
