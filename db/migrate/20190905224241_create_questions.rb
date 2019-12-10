class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :game_id
      t.integer :city_id
      t.float :distance

      t.timestamps
    end
  end
end
