class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :country
      t.float :lat
      t.float :long
      t.integer :population

      t.timestamps
    end
  end
end
