json.array!(@talks) do |talk|
  json.extract! talk, :id, :topic, :details, :starts_at, :duration, :event_id
  json.url talk_url(talk, format: :json)
end
