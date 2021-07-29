import { hot } from "react-hot-loader/root";
import React from "react";
import './main.global.css';
import Layout from "./shared/Layout/Layout";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import CardsList from "./shared/CardsList/CardsList";
import { CARDS_DATA as cards } from "./shared/Data/cards"

function AppComponent() {
    return (
      <Layout>
          <Header />
          <Content>
              <CardsList cards={cards} />
          </Content>
      </Layout>
    );
}

export const App = hot(() => <AppComponent />);