import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FarmList } from "./farm/FarmList";
import { FarmCreate } from "./farm/FarmCreate";
import { FarmEdit } from "./farm/FarmEdit";
import { FarmShow } from "./farm/FarmShow";
import { InventoryItemList } from "./inventoryItem/InventoryItemList";
import { InventoryItemCreate } from "./inventoryItem/InventoryItemCreate";
import { InventoryItemEdit } from "./inventoryItem/InventoryItemEdit";
import { InventoryItemShow } from "./inventoryItem/InventoryItemShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { CropList } from "./crop/CropList";
import { CropCreate } from "./crop/CropCreate";
import { CropEdit } from "./crop/CropEdit";
import { CropShow } from "./crop/CropShow";
import { PlantList } from "./plant/PlantList";
import { PlantCreate } from "./plant/PlantCreate";
import { PlantEdit } from "./plant/PlantEdit";
import { PlantShow } from "./plant/PlantShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Fazendoca"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Farm"
          list={FarmList}
          edit={FarmEdit}
          create={FarmCreate}
          show={FarmShow}
        />
        <Resource
          name="InventoryItem"
          list={InventoryItemList}
          edit={InventoryItemEdit}
          create={InventoryItemCreate}
          show={InventoryItemShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="Crop"
          list={CropList}
          edit={CropEdit}
          create={CropCreate}
          show={CropShow}
        />
        <Resource
          name="Plant"
          list={PlantList}
          edit={PlantEdit}
          create={PlantCreate}
          show={PlantShow}
        />
      </Admin>
    </div>
  );
};

export default App;
