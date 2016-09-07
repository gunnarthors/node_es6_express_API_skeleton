import { Router } from 'express'
let router = Router()

router.get('/', (req, res, next) => {
  let x = [1,2,3].map((n) => n + 5)
  res.status(200)
  .json({
    status: 'Ok',
    body: { 
      firstname: 'Tom',
      lastname: 'Selleck',
      data: x
    }
  })
})

router.get('/err', (req, res, next) => {
  if(1 === 1) {
    let err = new Error('one does equal one!')
    err.status = 401
    return next(err)
  }
  res.status(200)
  .json({
    status: 'Ok',
    body: { 
      firstname: 'Never',
      lastname: 'Showed'
    }
  })
})

export default router;
