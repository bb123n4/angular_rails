class CreateCommets < ActiveRecord::Migration
  def change
    create_table :commets do |t|
      t.string :body
      t.integer :upvotes
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
