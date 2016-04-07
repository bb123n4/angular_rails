class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :ling
      t.integer :upvotes

      t.timestamps null: false
    end
  end
end
