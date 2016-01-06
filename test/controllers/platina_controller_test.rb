require 'test_helper'

class PlatinaControllerTest < ActionController::TestCase
  test "should get platina_100es" do
    get :platina_100es
    assert_response :success
  end

end
