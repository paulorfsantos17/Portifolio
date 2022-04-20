import React from 'react'

import { createRoot } from 'react-dom/client'


import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const container = document.getElementById('root');


const root = createRoot(container)

root.render(
        <div>
            <Pai  nome="Paulo" sobrenome="Silva">
                <Filho nome="Pedro" sobrenome="Silva" />
                <Filho nome="Paulo" sobrenome="Silva"/>
                <Filho  nome ="Carla"  sobrenome="Silva" />
            </Pai>
         </div>
)



