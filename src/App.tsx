import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import './main.global.css';
import Layout from "./shared/Layout/Layout";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import CardsList from "./shared/CardsList/CardsList";
import {MyHooks} from "./shared/Hooks";

function AppComponent() {
    const [visible, setVisible] = useState(false);

    return (
      <Layout>
          <Header />
          <Content>
              <CardsList />
              <button onClick={() => setVisible(!visible)}>Change Me</button>
              {visible && <MyHooks title='Хуки' id='123' />}
          </Content>
      </Layout>
    );
}

export const App = hot(AppComponent);