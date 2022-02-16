class CreateHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :habits do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title, null: false
      t.text :detail, null: false
      t.integer :count, null: false, default: 0
      t.boolean :active, null: false, default: false

      t.timestamps
    end
  end
end
