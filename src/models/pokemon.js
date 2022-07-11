module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le nom est déjà pris.'
            },
            validate: {
                len: {
                    args: [1, 25],
                    msg: 'Le nom doit contenir entre 1 et 25 caractères.'
                },
                notEmpty: { msg: 'Le nom ne peut pas être vide.' },
                notNull: { msg: 'Le nom est une propriété requise.' }
            }
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'Utilisez uniquement des nombres entiers pour les points de vie.' },
                min: {
                    args: [0],
                    msg: 'Les points de vie doivent être supérieurs ou égales à 0'
                },
                max: {
                    args: [999],
                    msg: 'Les points de vie doivent être inférieurs ou égales à 999'
                },
                notNull: { msg: 'Les points de vie sont une propriété requise.' }
            }
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: { msg: 'Utilisez uniquement des nombres entiers pour les points de degâts.' },
                min: {
                    args: [0],
                    msg: 'Les points de dégâts doivent être supérieurs ou égales à 0'
                },
                max: {
                    args: [99],
                    msg: 'Les points de dégâts doivent être inférieurs ou égales à 99'
                },
                notNull: { msg: 'Les points de dégâts sont une propriété requise.' }
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: { msg: 'Utilisez uniquement une URL valide pour l\'image.' },
                notNull: { msg: 'L\'image est une propriété requise.' }
            }
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return this.getDataValue('types').split(',')
            },
            set(types) {
                this.setDataValue('types', types.join())
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}