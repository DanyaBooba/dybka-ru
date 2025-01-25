import {Route} from 'react-router-dom'

import PageIndex from '../pages/Main/PageIndex'
import PageProjects from '../pages/Projects/PageProjects'

const RoutesMain = [
    <Route index element={<PageIndex />} key="index" />,
    <Route path="/projects" element={<PageProjects />} key="projects" />,
]

export default RoutesMain