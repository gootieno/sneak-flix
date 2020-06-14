const { User } = require('./models');

class NullUser {
	isValid() {
		return false;
	}
	setPassword() {}
	isValidPassword() {
		return false;
	}
	toSafeObject() {
		return {};
	}
}

async function create(details) {
	const User = await User.build(details);
	User.setPassword(details.password);
	return await User.save();
}

async function findByEmail(email) {
	const User = await User.findOne({ where: { email } });
	return User || new NullUser();
}

async function findByTokenId(tokenId) {
	const User = await User.findOne({ where: { tokenId } });
	return User || new NullUser();
}

module.exports = {
	create,
	findByEmail,
	findByTokenId,
};
