const UserService = require(`../service/user.service`);
//const DBException = require(`../exceptions/database.exception`);

class UserController {

    async findByID(req, res) {
        try {
            const data = await UserService.findByID(req.params.UserID)
        if (data == null) {
            return res.status(500).json({ error: 'Invalid UserID or No User Match' });
        } else {
            return res.status(200).json(data);
        }
        } catch(e) {
            console.error(e);
            return res.status(500);
        }
    }

    async create(req, res) {
        try {
            const data = await UserService.create(req.body)
            if (data == null) {
                return res.status(500);
            } else {
                return res.status(200).json(data);
            }
        } catch (e) {
            console.error(e);
            return res.status(500);
        }
    }

    async update(req, res) {
        try {
            const data = await UserService.update(req.params.UserID, req.body)
            if (data == null) {
                return res.status(500);
            } else {
                return res.status(200).json({ update: 'User updated successfully' })
            }
        } catch (e) {
            console.error(e);
            return res.status(500);
        }
    }

    async deleteByID(req, res) {
        try {
            await UserService.deleteByID(req.params.UserID)
            if (req.body == null) {
                return res.status(500).json({ error: 'User does not exist'})
            } else {
                return res.status(200).json(`Success!`)
            }
        } catch (e) {
            console.error(e);
            return res.status(500)
        }
    }

}

module.exports = new UserController()