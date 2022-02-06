module ReviewsHelper
    def display_header(review)
        if params[:book_id]
            content_tag(:h1, "Add a Review for #{review.event.name} -  #{review.event.business.name}")
        else
          content_tag(:h1, "Write a review")
        end
    end
end
