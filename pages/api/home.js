

const handler = async (req, res) => {
    switch(req.method) {
        case 'GET': {
            res.status(200).json('Get req');
        }
        case 'POST': {
            res.status(200).json('Post req');
        }
    }
}
 
export default handler;