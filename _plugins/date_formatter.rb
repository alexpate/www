module Jekyll
  module PrettyDate

    def prettyDate(date)
      weekday = time(date).strftime("%A")
      day = returnOrdinal(time(date).strftime("%e"))
      month = time(date).strftime("%B")
      year = time(date).strftime("%Y")

      return "#{weekday}, #{day} #{month} #{year}"
    end

    def returnOrdinal(d)
      case d
      when "1" || "21" || "31"
        return "#{d}st"
        puts "st"
      when 2 || 22
        return "#{d}nd"
      when 3 || 23
        return "#{d}rd"
      else
        return "#{d}th"
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::PrettyDate)