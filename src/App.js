import React from 'react'
import Shop from './component/no4/shop/Shop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Table from './component/no5/Table'
import Edit from './component/no5/Edit'

const App = () => {
  return (
    <div>
          <Router>
             <Routes>
                 <Route exact path='/' element={<Shop/> } />
                 <Route exact path='/no5' element={<Table /> } />
                 <Route exact path='/edit/:id' element={<Edit /> } />
             </Routes>
         </Router>
    </div>
  )
}

export default App