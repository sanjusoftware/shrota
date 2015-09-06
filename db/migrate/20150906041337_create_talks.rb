class CreateTalks < ActiveRecord::Migration
  def change
    create_table :talks do |t|
      t.string :topic
      t.text :details
      t.datetime :starts_at
      t.decimal :duration
      t.integer :event_id
      t.integer :created_by_id

      t.timestamps null: false
    end
  end
end
