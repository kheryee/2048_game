class TestBoard < Minitest::Test

  def setup
    board = Array.new(4) {Array.new(4)}
  end

  def test_board_is_empty
    assert_nil, board
  end
end  