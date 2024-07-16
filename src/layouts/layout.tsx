import Header from "../components/Header/Header";
import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <Header/>
            <main>{children}</main>
        </>
    );
}