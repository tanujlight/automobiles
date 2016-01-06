require 'test_helper'

class CtControllerTest < ActionController::TestCase
  test "should get ct_100" do
    get :ct_100
    assert_response :success
  end

end
