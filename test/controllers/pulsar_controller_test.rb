require 'test_helper'

class PulsarControllerTest < ActionController::TestCase
  test "should get pulsar_ns" do
    get :pulsar_ns
    assert_response :success
  end

end
