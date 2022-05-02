import { VercelApiHandler } from '@vercel/node'

const api: VercelApiHandler = async (req, res) => {
  return res.status(200).send({
    message: 'amogus',
  })
}

export default api
