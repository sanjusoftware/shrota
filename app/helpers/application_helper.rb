module ApplicationHelper
  def display_duration start_date, end_date
    if start_date.year == end_date.year
      if start_date.month == end_date.month
        if start_date.day == end_date.day
          "#{end_date.strftime('%d %b, %Y')}"
        else
          "#{start_date.strftime('%d')} - #{end_date.strftime('%d %b, %Y')}"
        end
      else
        "#{start_date.strftime('%d %b')} - #{end_date.strftime('%d %b, %Y')}"
      end
    else
      "#{start_date.strftime('%d %b, %Y')} - #{end_date.strftime('%d %b, %Y')}"
    end
  end

  def display_local_time(date)
    date == nil ? date :  I18n.l(DateTime.parse(date.localtime.to_s), :format => '%l:%M%P')
  end

  def display_local_date(date)
    date == nil ? date :  I18n.l(DateTime.parse(date.localtime.to_s), :format => :short)
  end

end
