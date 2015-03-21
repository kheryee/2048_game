require '../app/models/board.rb'

describe Board do
  before do
    @board = Board.new
  end

  describe "#title" do
    it "returns the title of the blog" do
      @blog.title.must_equal "Treehouse Blog"
    end
  end
end