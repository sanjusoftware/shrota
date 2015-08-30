class WelcomeController < ApplicationController
  skip_filter :authenticate_user!

  def index
    @events = Event.all
  end
end
