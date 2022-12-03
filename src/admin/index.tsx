import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import StandupShow from "./StandupShow"
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={StandupShow} />
        {/* <Resource name="comments" list={ListGuesser} /> */}
    </Admin>
);

export default App;