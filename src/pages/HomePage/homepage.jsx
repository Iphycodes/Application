import React from "react";

import {MainHeader} from '../../components/Main-header/Main-header.component'
import { Content } from "../../components/Content/content.component";
import {MainFooter} from '../../components/main-footer/footer.component'


const HomePage = () => (
    <div>
        <header>
            <MainHeader/>
        </header>
            <Content/>
        <footer>
            <MainFooter/>
        </footer>
    </div>

)

export default HomePage;