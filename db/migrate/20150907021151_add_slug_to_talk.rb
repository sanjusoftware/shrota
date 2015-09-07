class AddSlugToTalk < ActiveRecord::Migration
  def change
    add_column :talks, :slug, :string
    add_index :talks, :slug
  end
end
