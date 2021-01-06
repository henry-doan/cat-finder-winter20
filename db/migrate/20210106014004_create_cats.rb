class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :nombre
      t.string :color
      t.string :avatar
      t.integer :age
      t.string :breed
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
