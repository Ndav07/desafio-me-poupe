import { app } from './app'

const PORT = process.env.PORT_API

app.listen(PORT, () => {
  return console.log(`API start in ... http://localhost:${PORT}`)
})
