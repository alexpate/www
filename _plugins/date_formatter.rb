module Jekyll
  module PrettyDate

    def prettyDate(date)
      day = returnOrdinal(time(date).strftime("%e").to_i)
      month = time(date).strftime("%B")
      year = time(date).strftime("%Y")

      return "#{month} #{day}, #{year}"
    end

    def returnOrdinal(d)
      case d
      when 1, 21, 31
        return "#{d}st"
      when 2, 22
        return "#{d}nd"
      when 3, 23
        return "#{d}rd"
      else
        return "#{d}th"
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::PrettyDate)