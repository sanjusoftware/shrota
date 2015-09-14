class ChangeColumnDurationToInteger < ActiveRecord::Migration
  def change
    change_column :talks, :duration, :integer
  end
end
