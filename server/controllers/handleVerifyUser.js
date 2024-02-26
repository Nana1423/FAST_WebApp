const handleVerifyUser = async (req, res) => {
    try {
        const {user, password} = req.body
        res.status(200).send({user: user, password: password});
    } catch (error) {
        res.status(400).send({error: "Invalid Information Provided"})
    }
}

module.exports = handleVerifyUser