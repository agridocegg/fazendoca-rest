import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PLANT_TITLE_FIELD } from "../plant/PlantTitle";

export const CropShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
