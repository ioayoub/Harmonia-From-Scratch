const AbstractRepository = require("./AbstractRepository")

class UserRepository extends AbstractRepository {
  constructor() {
    super({table: "user"});
  }

  //CRUD
  async create({email, firstname, lastname, password}) {

    const [row] = await this.database.query(`INSERT INTO ${this.table} (email, firstname, lastname, password)
                                             VALUES (?, ?, ?, ?)`, [email, firstname, lastname, password]);

    return row.insertId;
  }
}

module.exports = UserRepository;