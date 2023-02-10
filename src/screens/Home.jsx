import React from 'react'
import trollFace from '../assets/trollFace.jpg';

import Card from '../components/Card'

const Home = () => {
  return (
    <div>
      <div className='firstPart'>
        <div className='homePart'>
          <div className='imageHome'>
            <img src={trollFace} alt='trollface'/>
          </div>
          <div className='part1Home'>
            <h1>Time To Troll</h1>
            <p>
              Please, try click on the troll face. <br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Obcaecati quis architecto in atque doloremque odio accusantium, 
              vero repellendus, temporibus voluptatem laudantium cum laboriosam 
              sunt saepe inventore! Aperiam suscipit repudiandae obcaecati perferendis 
              fugit architecto iure explicabo id provident modi praesentium eaque dolores 
              officiis dolore harum, reprehenderit, dicta, impedit dignissimos fugiat. Iure.
            </p>
          </div>
        </div>
        <div className='cuttingPart'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatum nulla dolore.
            Quod error veritatis, pariatur eveniet temporibus, magnam sint minus, et praesentium aliquam eum 
            minima labore odit saepe laudantium fugit! Consequuntur id at reprehenderit eaque in ducimus nisi 
            velit, omnis sint quis beatae maxime itaque cumque, quaerat suscipit! Illo?</p>
        </div>
      </div>
      <div className='secondPart'>
        <Card className='cardRow' />
        <Card className='cardRowReverse' />
        <Card className='cardRow' />
        <Card className='cardRowReverse' />
      </div>
    </div>
  )
}

export default Home
