import { hot } from "react-hot-loader/root";
import React from "react";
import './main.global.css';
import Layout from "./shared/Layout/Layout";
import Header from "./shared/Header/Header";
import Content from "./shared/Content/Content";
import CardsList from "./shared/CardsList/CardsList";
import { CARDS_DATA as cards } from "./shared/Data/cards"
import {useToken} from "./hooks/useToken";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";

function AppComponent() {
    const [ token ] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardsList cards={cards} />
                        </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />);