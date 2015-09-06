class AddColumnsToEvents < ActiveRecord::Migration
  def change
    add_column :events, :website, :string
    add_column :events, :contact_email, :string
    add_column :events, :mailing_list, :string
  end
end
