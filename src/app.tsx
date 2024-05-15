import {HistoryRouter} from "redux-first-history/rr6";
import {history} from "@redux/configure-store.ts";
import {Route, Routes} from "react-router-dom";
import {Main} from "@components/Main/Main.tsx";


export const App = () => {
    return (
        <HistoryRouter history={history}>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </HistoryRouter>


    )
}
