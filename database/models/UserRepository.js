const AbstractRepository = require("./AbstractRepository")

class UserRepository extends AbstractRepository {
  constructor() {
    super({table: "user"});
  }

  //CRUD
  async create({email, password}) {

    const [row] = await this.database.query(`INSERT INTO ${this.table} (email, password)
                                             VALUES (?, ?)`, [email, password]);

    return row.insertId;
  }
}

module.exports = UserRepository;