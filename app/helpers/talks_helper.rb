module TalksHelper
  def timeline_class(talk)
    return 'success' if talk.started?
    'warning' if talk.yet_to_start?
  end

  def timeline_icon_class(talk)
    return 'fa fa-thumbs-o-up' if talk.started?
    return 'fa fa-check-square-o' if talk.ended?
    'fa fa-clock-o' if talk.yet_to_start?
  end

end
