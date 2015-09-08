class TalksController < ApplicationController
  before_action :set_talk, only: [:show, :edit, :update, :destroy]
  skip_filter :authenticate_user!, only: [:show, :index]

  # GET /talks
  # GET /talks.json
  def index
    @event = Event.friendly.find(params[:event_id])
    @talks = @event.talks
  end

  # GET /talks/1
  # GET /talks/1.json
  def show
  end

  # GET /talks/new
  def new
    @event = Event.find(params[:event_id])
    @talk = @event.talks.new
  end

  # GET /talks/1/edit
  def edit
  end

  # POST /talks
  # POST /talks.json
  def create
    @event = Event.find(params[:event_id])
    @talk = @event.talks.new(talk_params)
    @talk.created_by = current_user

    respond_to do |format|
      if @talk.save
        format.html { redirect_to event_talk_path(@event, @talk), notice: 'Talk was successfully created.' }
        format.json { render action: 'show', status: :created, location: @talk }
      else
        format.html { render action: 'new' }
        format.json { render json: @talk.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /talks/1
  # PATCH/PUT /talks/1.json
  def update
    respond_to do |format|
      if @talk.update(talk_params)
        format.html { redirect_to @talk, notice: 'Talk was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @talk.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /talks/1
  # DELETE /talks/1.json
  def destroy
    @talk.destroy
    respond_to do |format|
      format.html { redirect_to talks_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_talk
      @event = Event.friendly.find(params[:event_id])
      @talk = @event.talks.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def talk_params
      params.require(:talk).permit(:topic, :details, :starts_at, :duration, :event_id, :tag_list)
    end
end
