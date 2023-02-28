import dotenv from 'dotenv';
import express from 'express';
import api from './api';
dotenv.config();

(void async function(){
  const port = process.env.PORT! || 3030;
  /**
   * Ajoute tes connections içi, par exemple une connection à une DB. le tout
   * roule dans une fonction async, donc tu peut assurer une connection içi
   * avant de laisser passer le traffic :) !
   */
  
  const service = express();
  service.use(api);
  
  service.listen(port, () => 
    console.log(`[NODE SERVICE] LISTENING ON ${port}`)
  )
}())
