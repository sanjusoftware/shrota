json.array!(@events) do |event|
  json.extract! event, :id, :name, :description, :starts_at, :ends_at, :user_id
  json.url event_url(event, format: :json)
end
