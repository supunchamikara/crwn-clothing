import React from 'react';
//import './homepage.styles.scss'; // old styles
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = ({ history }) => (
    <HomePageContainer className='homepage'>
        <Directory history={history} />
    </HomePageContainer>
);
export default HomePage;