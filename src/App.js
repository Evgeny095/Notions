import { Routes, Route} from 'react-router-dom';
import { AboutPage } from './pages/aboutPage/AboutPage';
import { NotionsPage } from './pages/notionsPages/notionsPage/NotionsPage';
import { NotionPage } from './pages/notionsPages/notionPage/NotionPage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { TodoPage } from './pages/toDoPage/TodoPage';
import { HomePage } from './pages/homePage/HomePage';
import { Loyout } from './components/loyuout/Loyout';
import './styles/reset.css';

function App() {
  return (<>
     <Routes>
      <Route path='/' element={<Loyout/>}>
        <Route index element={<HomePage/>} />
        <Route path='about/*' element={<AboutPage/>}/>
        <Route path='notions' element={<NotionsPage/>}/>
        <Route path='notions/:id' element={<NotionPage/>}/>
        <Route path='to-do' element={<TodoPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  </>);
}

export default App;
