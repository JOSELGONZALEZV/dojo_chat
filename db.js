const Sequelize = require('sequelize');

// acá creamos la conexión a la Base de Datos
const sql = new Sequelize('zoo', 'root', 'Leptoespira2', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sql.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un nombre'
      },
      len: {
        args: [2],
        msg: 'El nombre debe ser de largo al menos 2'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un email'
      },
      len: {
        args: [3],
        msg: 'El email debe ser de largo al menos 3'
      },
      isEmail: {
        msg: 'Debe ser un email válido'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar una contraseña'
      },
      len: {
        args: [3],
        msg: 'La contraseña debe ser de largo al menos 3'
      },
    }
  },
});


const Keeper = sql.define('Keeper', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un nombre'
      },
      len: {
        args: [2],
        msg: 'El nonbre debe ser de largo al menos 2'
      }
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un apellido'
      },
      len: {
        args: [2],
        msg: 'El apellido debe ser de largo al menos 2'
      }
    }
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un celular'
      },
      len: {
        args: [3],
        msg: 'El celular debe ser de largo al menos 3'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un email'
      },
      len: {
        args: [3],
        msg: 'El nonbre debe ser de largo al menos 3'
      },
      isEmail: {
        msg: 'Debe ser un email válido'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Debe indicar un email'
      },
      len: {
        args: [3],
        msg: 'El nonbre debe ser de largo al menos 3'
      },
    }
  },
});


//  después sincronizamos nuestro código con la base de datos
sql.sync()
.then(() => {
  console.log('Base de datos y tablas creadas');
}); 




// finalmente acá listamos todos los modelos que queremos exportar
module.exports = {
  Keeper,
  User
};

// "password123" => "pbkdf2_sha256$216000$tFUjF5SgzG7T$DFzc9WRagX2wljBU4qcNdDNulR+tprCcFKIlarAUHEk="
