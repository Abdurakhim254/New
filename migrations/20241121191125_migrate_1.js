/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return (
        knex.schema.createSchemaIfNotExists('users', function (table) {
            table.increments('id'),
                table.string('name'),
                table.string('email').unique().notNullable(),
                table.string('password').notNullable(),
                table.enu('role', ['user', 'admin', 'manager']),
                table.string('avatar'),
                table.string('username').unique().notNullable(),
                table.date('birth_of_date'),
                table.string('phone_number').unique().notNullable(),
                table.boolean('is_active').defaultTo(false),
                table.timestamp('created_at').defaultTo('now()'),
                table.timestamp('updated_at').defaultTo('now()')
        }),
        knex.schema.createTableIfNotExists('category', function (table) {
            table.increments('id'),
                table.string('name'),
                table.string('description'),
                table.string('tag'),
                table.timestamp('created_at').defaultTo('now()'),
                table.timestamp('updated_at').defaultTo('now()')
        })
    )
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return (
        knex.schema.dropTableIfExists('users'),
        knex.schema.dropTableIfExists('category')
    )
}
