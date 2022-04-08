import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { FarmTitle } from "../farm/FarmTitle";
import { ItemTitle } from "../item/ItemTitle";

export const InventoryItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="farm.id" reference="Farm" label="Farm">
          <SelectInput optionText={FarmTitle} />
        </ReferenceInput>
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
