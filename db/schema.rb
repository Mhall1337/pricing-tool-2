# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_04_27_191158) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carrier_notes", force: :cascade do |t|
    t.integer "carrier_id"
    t.integer "user_id"
    t.string "note"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "carriers", force: :cascade do |t|
    t.string "carrier_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "dispatchers", force: :cascade do |t|
    t.string "dispatcher_name"
    t.integer "dispatcher_phone_number"
    t.string "email"
    t.integer "carrier_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "state_abbr"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "city"
    t.string "state_long_name"
    t.float "longitude"
    t.float "latitude"
    t.float "distance"
  end

  create_table "shipments", force: :cascade do |t|
    t.string "commodity"
    t.string "trailer_type"
    t.integer "carrier_id"
    t.integer "miles"
    t.integer "rate"
    t.string "driver_name"
    t.integer "driver_phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "dispatcher_id"
    t.integer "origin_id"
    t.integer "destination_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "shipments", "locations", column: "destination_id"
  add_foreign_key "shipments", "locations", column: "origin_id"
end
