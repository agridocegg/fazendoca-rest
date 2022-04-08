import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CropTitle } from "../crop/CropTitle";
import { ItemTitle } from "../item/ItemTitle";

export const PlantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Actor" source="actor" />
        <ReferenceArrayInput
          source="crops"
          reference="Crop"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CropTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Growth Speed" source="growthSpeed" />
        <ReferenceInput source="item.id" reference="Item" label="Items">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Stages" source="stages" />
      </SimpleForm>
    </Edit>
  );
};
