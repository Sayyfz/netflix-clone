import connect from "../../Database/Connection";

const handler = async (req, res) => {
    if(req.method === 'GET') {
        connect()
          .then(() => console.log('connected'))
          .catch(err => console.log(err))
          .then(res.status(200).send('home'));
    } else if (req.method === 'POST') {
        res.status(200).json('Post req');
    }
}
 
export default handler;