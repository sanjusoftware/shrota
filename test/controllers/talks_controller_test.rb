require 'test_helper'

class TalksControllerTest < ActionController::TestCase
  setup do
    @talk = talks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:talks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create talk" do
    assert_difference('Talk.count') do
      post :create, talk: { details: @talk.details, duration: @talk.duration, event_id: @talk.event_id, starts_at: @talk.starts_at, topic: @talk.topic }
    end

    assert_redirected_to talk_path(assigns(:talk))
  end

  test "should show talk" do
    get :show, id: @talk
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @talk
    assert_response :success
  end

  test "should update talk" do
    patch :update, id: @talk, talk: { details: @talk.details, duration: @talk.duration, event_id: @talk.event_id, starts_at: @talk.starts_at, topic: @talk.topic }
    assert_redirected_to talk_path(assigns(:talk))
  end

  test "should destroy talk" do
    assert_difference('Talk.count', -1) do
      delete :destroy, id: @talk
    end

    assert_redirected_to talks_path
  end
end
