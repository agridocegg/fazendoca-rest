import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CropTitle } from "../crop/CropTitle";
import { InventoryItemTitle } from "../inventoryItem/InventoryItemTitle";
import { UserTitle } from "../user/UserTitle";

export const FarmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="crops"
          reference="Crop"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CropTitle} />
        </ReferenceArrayInput>
        <TextInput label="Display Name" source="displayName" />
        <ReferenceArrayInput
          source="inventoryItems"
          reference="InventoryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
